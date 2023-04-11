import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSchedulesScheduleECandidateOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}
export declare enum GetSchedulesScheduleESupportOpposeIndicatorEnum {
    S = "S",
    O = "O"
}
export declare class GetSchedulesScheduleERequest extends SpeakeasyBase {
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
     * A unique identifier assigned to each candidate registered with the FEC.
     * If a person runs for several offices, that person will have separate candidate IDs for each office.
     *
     */
    candidateId?: string[];
    /**
     * Federal office candidate runs for: H, S or P
     */
    candidateOffice?: GetSchedulesScheduleECandidateOfficeEnum[];
    /**
     * Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
     */
    candidateOfficeDistrict?: string[];
    /**
     * US state or territory
     */
    candidateOfficeState?: string[];
    /**
     * Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
     */
    candidateParty?: string[];
    /**
     *
     * @remarks
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId?: string[];
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
     * The form where the underlying data comes from, for example, Form 1 would appear as F1:
     *
     * @remarks
     *     - F1   Statement of Organization
     *     - F1M  Notification of Multicandidate Status
     *     - F2   Statement of Candidacy
     *     - F3   Report of Receipts and Disbursements for an Authorized Committee
     *     - F3P  Report of Receipts and Disbursements by an Authorized Committee of a Candidate for     The Office of President or Vice President
     *     - F3L  Report of Contributions Bundled by Lobbyists/Registrants and Lobbyist/Registrant PACs
     *     - F3X  Report of Receipts and Disbursements for other than an Authorized Committee
     *     - F4   Report of Receipts and Disbursements for a Committee or Organization Supporting a Nomination Convention
     *     - F5   Report of Independent Expenditures Made and Contributions Received
     *     - F6   48 Hour Notice of Contributions/Loans Received
     *     - F7   Report of Communication Costs by Corporations and Membership Organizations
     *     - F8   Debt Settlement Plan
     *     - F9   24 Hour Notice of Disbursements for Electioneering Communications
     *     - F13  Report of Donations Accepted for Inaugural Committee
     *     - F99  Miscellaneous Text
     *     - FRQ  Request for Additional Information
     *
     */
    filingForm?: string[];
    /**
     *
     * @remarks
     * An unique identifier for each page where the electronic or paper filing is reported.
     *
     */
    imageNumber?: string[];
    /**
     *
     * @remarks
     * Record filed as 24- or 48-hour notice.
     *
     */
    isNotice?: boolean[];
    /**
     *
     * @remarks
     * When sorting by `expenditure_amount`,
     * this is populated with the `expenditure_amount` of the last result.
     * However, you will need to pass the index of that last result to
     * `last_index` to get the next page.
     *
     */
    lastExpenditureAmount?: number;
    /**
     *
     * @remarks
     * When sorting by `expenditure_date`,
     * this is populated with the `expenditure_date` of the last result.
     * However, you will need to pass the index of that last result to
     * `last_index` to get the next page.
     *
     */
    lastExpenditureDate?: Date;
    /**
     * Index of last result from previous page
     */
    lastIndex?: number;
    /**
     *
     * @remarks
     * When sorting by `office_total_ytd`,
     * this is populated with the `office_total_ytd` of the last result.
     * However, you will need to pass the index of that last result to
     * `last_index` to get the next page.'
     *
     */
    lastOfficeTotalYtd?: number;
    /**
     *
     * @remarks
     * When sorting by `support_oppose_indicator`,
     * this is populated with the `support_oppose_indicator` of the last result.
     * However, you will need to pass the index of that last result to `last_index`
     * to get the next page.'
     *
     */
    lastSupportOpposeIndicator?: string;
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
     * Selects all items distributed by this committee before this date
     */
    maxDisseminationDate?: Date;
    /**
     *
     * @remarks
     * Selects all filings received before this date
     *
     */
    maxFilingDate?: Date;
    /**
     * Maxium image number of the page where the schedule item is reported
     */
    maxImageNumber?: string;
    /**
     * Filter for all amounts greater than a value.
     */
    minAmount?: string;
    /**
     * Minimum date
     */
    minDate?: Date;
    /**
     * Selects all items distributed by this committee after this date
     */
    minDisseminationDate?: Date;
    /**
     *
     * @remarks
     * Selects all filings received after this date
     *
     */
    minFilingDate?: Date;
    /**
     * Minium image number of the page where the schedule item is reported
     */
    minImageNumber?: string;
    /**
     *
     * @remarks
     * The report associated with the transaction is either new or is the most-recently filed amendment. Undetermined version (`null`) is always included.
     *
     */
    mostRecent?: boolean;
    /**
     *
     * @remarks
     * Name of the entity that received the payment.
     *
     */
    payeeName?: string[];
    /**
     * The number of results returned per page. Defaults to 20.
     */
    perPage?: number;
    /**
     *
     * @remarks
     * Keyword search for spender name or ID
     *
     */
    qSpender?: string[];
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
     * Explains if the money was spent in order to support or oppose a candidate or candidates. (Coded S or O for support or oppose.) This indicator applies to independent expenditures and communication costs.
     */
    supportOpposeIndicator?: GetSchedulesScheduleESupportOpposeIndicatorEnum[];
}
export declare class GetSchedulesScheduleEResponse extends SpeakeasyBase {
    contentType: string;
    scheduleEPage?: shared.ScheduleEPage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
