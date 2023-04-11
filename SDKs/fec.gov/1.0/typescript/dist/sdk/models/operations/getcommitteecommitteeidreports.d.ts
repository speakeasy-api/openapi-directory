import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCommitteeCommitteeIdReportsRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * API key for https://api.data.gov. Get one at https://api.data.gov/signup.
     *
     */
    apiKey: string;
    /**
     *
     * @remarks
     * Unique identifier for the electronic or paper report. This number is used to construct
     * PDF URLs to the original document.
     *
     */
    beginningImageNumber?: string[];
    /**
     *
     * @remarks
     * A unique identifier assigned to each candidate registered with the FEC.
     * If a person runs for several offices, that person will have separate candidate IDs for each office.
     *
     */
    candidateId?: string;
    /**
     *
     * @remarks
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId: string;
    /**
     *
     * @remarks
     * Filter records to only those that were applicable to a given
     * two-year period.The cycle begins with an odd year and is named
     * for its ending, even year.
     *
     */
    cycle?: number[];
    /**
     *
     * @remarks
     * False indicates that a report is the most recent. True indicates that the report has been superseded by an amendment.
     *
     */
    isAmended?: boolean;
    /**
     *
     * @remarks
     * Filter for all amounts less than a value.
     *
     */
    maxCashOnHandEndPeriodAmount?: string;
    /**
     *
     * @remarks
     * Filter for all amounts less than a value.
     *
     */
    maxDebtsOwedExpenditures?: string;
    /**
     *
     * @remarks
     * Filter for all amounts less than a value.
     *
     */
    maxDisbursementsAmount?: string;
    /**
     *
     * @remarks
     * Filter for all amounts less than a value.
     *
     */
    maxIndependentExpenditures?: string;
    /**
     *
     * @remarks
     * Filter for all amounts less than a value.
     *
     */
    maxPartyCoordinatedExpenditures?: string;
    /**
     *
     * @remarks
     * Filter for all amounts less than a value.
     *
     */
    maxReceiptsAmount?: string;
    /**
     *
     * @remarks
     * Filter for all amounts less than a value.
     *
     */
    maxTotalContributions?: string;
    /**
     *
     * @remarks
     * Filter for all amounts greater than a value.
     *
     */
    minCashOnHandEndPeriodAmount?: string;
    /**
     *
     * @remarks
     * Filter for all amounts greater than a value.
     *
     */
    minDebtsOwedAmount?: string;
    /**
     *
     * @remarks
     * Filter for all amounts greater than a value.
     *
     */
    minDisbursementsAmount?: string;
    /**
     *
     * @remarks
     * Filter for all amounts greater than a value.
     *
     */
    minIndependentExpenditures?: string;
    /**
     *
     * @remarks
     * Filter for all amounts greater than a value.
     *
     */
    minPartyCoordinatedExpenditures?: string;
    /**
     *
     * @remarks
     * Filter for all amounts greater than a value.
     *
     */
    minReceiptsAmount?: string;
    /**
     *
     * @remarks
     * Filter for all amounts greater than a value.
     *
     */
    minTotalContributions?: string;
    /**
     * For paginating through results, starting at page 1
     */
    page?: number;
    /**
     * The number of results returned per page. Defaults to 20.
     */
    perPage?: number;
    /**
     * Report type; prefix with "-" to exclude. Name of report where the underlying data comes from:
     *
     * @remarks
     *     - 10D Pre-Election
     *     - 10G Pre-General
     *     - 10P Pre-Primary
     *     - 10R Pre-Run-Off
     *     - 10S Pre-Special
     *     - 12C Pre-Convention
     *     - 12G Pre-General
     *     - 12P Pre-Primary
     *     - 12R Pre-Run-Off
     *     - 12S Pre-Special
     *     - 30D Post-Election
     *     - 30G Post-General
     *     - 30P Post-Primary
     *     - 30R Post-Run-Off
     *     - 30S Post-Special
     *     - 60D Post-Convention
     *     - M1  January Monthly
     *     - M10 October Monthly
     *     - M11 November Monthly
     *     - M12 December Monthly
     *     - M2  February Monthly
     *     - M3  March Monthly
     *     - M4  April Monthly
     *     - M5  May Monthly
     *     - M6  June Monthly
     *     - M7  July Monthly
     *     - M8  August Monthly
     *     - M9  September Monthly
     *     - MY  Mid-Year Report
     *     - Q1  April Quarterly
     *     - Q2  July Quarterly
     *     - Q3  October Quarterly
     *     - TER Termination Report
     *     - YE  Year-End
     *     - ADJ COMP ADJUST AMEND
     *     - CA  COMPREHENSIVE AMEND
     *
     */
    reportType?: string[];
    /**
     *
     * @remarks
     * Provide a field to sort by. Use `-` for descending order. ex: `-case_no`
     *
     */
    sort?: string[];
    /**
     * Hide null values on sorted column(s).
     */
    sortHideNull?: boolean;
    /**
     * Toggle that filters out all rows having sort column that is non-null
     */
    sortNullOnly?: boolean;
    /**
     * Toggle that sorts null values last
     */
    sortNullsLast?: boolean;
    /**
     * The one-letter type code of the organization:
     *
     * @remarks
     *         - C communication cost
     *         - D delegate
     *         - E electioneering communication
     *         - H House
     *         - I independent expenditure filer (not a committee)
     *         - N PAC - nonqualified
     *         - O independent expenditure-only (super PACs)
     *         - P presidential
     *         - Q PAC - qualified
     *         - S Senate
     *         - U single candidate independent expenditure
     *         - V PAC with non-contribution account, nonqualified
     *         - W PAC with non-contribution account, qualified
     *         - X party, nonqualified
     *         - Y party, qualified
     *         - Z national party non-federal account
     *
     */
    type?: string[];
    /**
     *
     * @remarks
     * Forms with coverage date -
     *     year from the coverage ending date.
     * Forms without coverage date -
     *     year from the receipt date.
     *
     */
    year?: number[];
}
export declare class GetCommitteeCommitteeIdReportsResponse extends SpeakeasyBase {
    committeeReportsPage?: shared.CommitteeReportsPage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
