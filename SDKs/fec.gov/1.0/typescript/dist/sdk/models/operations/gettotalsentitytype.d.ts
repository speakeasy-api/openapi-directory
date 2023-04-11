import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Committee groupings based on FEC filing form.                 Choose one of: `presidential`, `pac`, `party`, `pac-party`,                 `house-senate`, or `ie-only`
 */
export declare enum GetTotalsEntityTypeEntityTypeEnum {
    Presidential = "presidential",
    Pac = "pac",
    Party = "party",
    PacParty = "pac-party",
    HouseSenate = "house-senate",
    IeOnly = "ie-only"
}
export declare enum GetTotalsEntityTypeFilingFrequencyEnum {
    Unknown = "",
    A = "A",
    M = "M",
    N = "N",
    Q = "Q",
    T = "T",
    W = "W",
    MinusA = "-A",
    MinusT = "-T"
}
export declare enum GetTotalsEntityTypeOrganizationTypeEnum {
    Unknown = "",
    C = "C",
    L = "L",
    M = "M",
    T = "T",
    V = "V",
    W = "W"
}
export declare class GetTotalsEntityTypeRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * API key for https://api.data.gov. Get one at https://api.data.gov/signup.
     *
     */
    apiKey: string;
    /**
     * The one-letter designation code of the organization:
     *
     * @remarks
     *          - A authorized by a candidate
     *          - J joint fundraising committee
     *          - P principal campaign committee of a candidate
     *          - U unauthorized
     *          - B lobbyist/registrant PAC
     *          - D leadership PAC
     *
     */
    committeeDesignation?: string[];
    /**
     *
     * @remarks
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId?: string[];
    /**
     * US state or territory
     */
    committeeState?: string[];
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
    committeeType?: string[];
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
     * Committee groupings based on FEC filing form.                 Choose one of: `presidential`, `pac`, `party`, `pac-party`,                 `house-senate`, or `ie-only`
     */
    entityType: GetTotalsEntityTypeEntityTypeEnum;
    /**
     * The one-letter
     *
     * @remarks
     *     code of the filing frequency:
     *          - A Administratively terminated
     *          - D Debt
     *          - M Monthly filer
     *          - Q Quarterly filer
     *          - T Terminated
     *          - W Waived
     *
     */
    filingFrequency?: GetTotalsEntityTypeFilingFrequencyEnum[];
    /**
     *
     * @remarks
     * Filter for all amounts less than a value.
     *
     */
    maxDisbursements?: string;
    /**
     * Filter for committees whose first Form 1 was received on or before this date.
     */
    maxFirstF1Date?: Date;
    /**
     *
     * @remarks
     * Filter for all amounts less than a value.
     *
     */
    maxLastCashOnHandEndPeriod?: string;
    /**
     *
     * @remarks
     * Filter for all amounts less than a value.
     *
     */
    maxLastDebtsOwedByCommittee?: string;
    /**
     *
     * @remarks
     * Filter for all amounts less than a value.
     *
     */
    maxReceipts?: string;
    /**
     *
     * @remarks
     * Filter for all amounts greater than a value.
     *
     */
    minDisbursements?: string;
    /**
     * Filter for committees whose first Form 1 was received on or after this date.
     */
    minFirstF1Date?: Date;
    /**
     *
     * @remarks
     * Filter for all amounts greater than a value.
     *
     */
    minLastCashOnHandEndPeriod?: string;
    /**
     *
     * @remarks
     * Filter for all amounts greater than a value.
     *
     */
    minLastDebtsOwedByCommittee?: string;
    /**
     *
     * @remarks
     * Filter for all amounts greater than a value.
     *
     */
    minReceipts?: string;
    /**
     * The one-letter code for the kind for organization:
     *
     * @remarks
     *         - C corporation
     *         - L labor organization
     *         - M membership organization
     *         - T trade association
     *         - V cooperative
     *         - W corporation without capital stock
     *
     */
    organizationType?: GetTotalsEntityTypeOrganizationTypeEnum[];
    /**
     * For paginating through results, starting at page 1
     */
    page?: number;
    /**
     * The number of results returned per page. Defaults to 20.
     */
    perPage?: number;
    /**
     * Provide a field to sort by. Use `-` for descending order.
     *
     * @remarks
     *
     */
    sort?: string;
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
     *
     * @remarks
     * A unique identifier assigned to each candidate registered with the FEC.
     * If a person runs for several offices, that person will have separate candidate IDs for each office. This is a filter for Leadership PAC sponsor.
     *
     */
    sponsorCandidateId?: string[];
    /**
     * Name of the Committee's treasurer. If multiple treasurers for the committee, the most recent treasurer will be shown.
     */
    treasurerName?: string[];
}
export declare class GetTotalsEntityTypeResponse extends SpeakeasyBase {
    committeeTotalsPage?: shared.CommitteeTotalsPage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
