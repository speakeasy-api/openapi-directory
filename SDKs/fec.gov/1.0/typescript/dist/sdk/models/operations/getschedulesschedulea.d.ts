import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSchedulesScheduleAContributorTypeEnum {
    Individual = "individual",
    Committee = "committee"
}
export declare enum GetSchedulesScheduleARecipientCommitteeDesignationEnum {
    Unknown = "",
    A = "A",
    J = "J",
    P = "P",
    U = "U",
    B = "B",
    D = "D"
}
export declare enum GetSchedulesScheduleARecipientCommitteeOrgTypeEnum {
    Unknown = "",
    C = "C",
    L = "L",
    M = "M",
    T = "T",
    V = "V",
    W = "W"
}
export declare enum GetSchedulesScheduleARecipientCommitteeTypeEnum {
    Unknown = "",
    C = "C",
    D = "D",
    E = "E",
    H = "H",
    I = "I",
    N = "N",
    O = "O",
    P = "P",
    Q = "Q",
    S = "S",
    U = "U",
    V = "V",
    W = "W",
    X = "X",
    Y = "Y",
    Z = "Z"
}
export declare class GetSchedulesScheduleARequest extends SpeakeasyBase {
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
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId?: string[];
    /**
     * City of contributor
     */
    contributorCity?: string[];
    /**
     * Employer of contributor, filers need to make an effort to gather this information
     */
    contributorEmployer?: string[];
    /**
     * The FEC identifier should be represented here if the contributor is registered with the FEC.
     */
    contributorId?: string[];
    /**
     * Name of contributor
     */
    contributorName?: string[];
    /**
     * Occupation of contributor, filers need to make an effort to gather this information
     */
    contributorOccupation?: string[];
    /**
     * State of contributor
     */
    contributorState?: string[];
    /**
     * Filters individual or committee contributions based on line number
     */
    contributorType?: GetSchedulesScheduleAContributorTypeEnum[];
    /**
     * Zip code of contributor
     */
    contributorZip?: string[];
    /**
     *
     * @remarks
     * An unique identifier for each page where the electronic or paper filing is reported.
     *
     */
    imageNumber?: string[];
    /**
     * Restrict to non-earmarked individual contributions where memo code is true. Filtering individuals is useful to make sure contributions are not double reported and in creating breakdowns of the amount of money coming from individuals.
     */
    isIndividual?: boolean;
    /**
     * When sorting by `contribution_receipt_amount`, this is populated with the         `contribution_receipt_amount` of the last result. However, you will need to pass the index         of that last result to `last_index` to get the next page.
     */
    lastContributionReceiptAmount?: number;
    /**
     * When sorting by `contribution_receipt_date`, this is populated with the         `contribution_receipt_date` of the last result. However, you will need to pass the index         of that last result to `last_index` to get the next page.
     */
    lastContributionReceiptDate?: Date;
    /**
     * Index of last result from previous page
     */
    lastIndex?: number;
    /**
     * Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
     */
    lineNumber?: string;
    /**
     * Filter for all amounts less than a value.
     */
    maxAmount?: string;
    /**
     * Maximum date
     */
    maxDate?: Date;
    /**
     * Maxium image number of the page where the schedule item is reported
     */
    maxImageNumber?: string;
    /**
     * Maximum load date
     */
    maxLoadDate?: Date;
    /**
     * Filter for all amounts greater than a value.
     */
    minAmount?: string;
    /**
     * Minimum date
     */
    minDate?: Date;
    /**
     * Minium image number of the page where the schedule item is reported
     */
    minImageNumber?: string;
    /**
     * Minimum load date
     */
    minLoadDate?: Date;
    /**
     * The number of results returned per page. Defaults to 20.
     */
    perPage?: number;
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
    recipientCommitteeDesignation?: GetSchedulesScheduleARecipientCommitteeDesignationEnum[];
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
    recipientCommitteeOrgType?: GetSchedulesScheduleARecipientCommitteeOrgTypeEnum[];
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
    recipientCommitteeType?: GetSchedulesScheduleARecipientCommitteeTypeEnum[];
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
     *
     * @remarks
     * This is a two-year period that is derived from the year a transaction took place in the
     * Itemized Schedule A and Schedule B tables. In cases where we have the date of the transaction
     * (contribution_receipt_date in schedules/schedule_a, disbursement_date in schedules/schedule_b)
     * the two_year_transaction_period is named after the ending, even-numbered year. If we do not
     * have the date  of the transaction, we fall back to using the report year (report_year in both
     * tables) instead,  making the same cycle adjustment as necessary. If no transaction year is
     * specified, the results default to the most current cycle.
     *
     */
    twoYearTransactionPeriod?: number[];
}
export declare class GetSchedulesScheduleAResponse extends SpeakeasyBase {
    contentType: string;
    scheduleAPage?: shared.ScheduleAPage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
