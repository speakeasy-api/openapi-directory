import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Federal office candidate runs for: H, S or P
 */
export declare enum GetSchedulesScheduleEEfileCandidateOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}
export declare enum GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum {
    S = "S",
    O = "O"
}
export declare class GetSchedulesScheduleEEfileRequest extends SpeakeasyBase {
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
    candidateOffice?: GetSchedulesScheduleEEfileCandidateOfficeEnum;
    /**
     * Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
     */
    candidateOfficeDistrict?: string[];
    /**
     * US state or territory where a candidate runs for office
     */
    candidateOfficeState?: string[];
    /**
     * Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
     */
    candidateParty?: string[];
    /**
     *
     * @remarks
     * Search for candidates by candiate id or candidate first or last name
     *
     */
    candidateSearch?: string[];
    /**
     *
     * @remarks
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId?: string[];
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
    isNotice?: boolean;
    /**
     * Selects all items distributed by this committee before this date
     */
    maxDisseminationDate?: Date;
    /**
     * Selects all items expended by this committee less than this amount
     */
    maxExpenditureAmount?: number;
    /**
     * Selects all items expended by this committee before this date
     */
    maxExpenditureDate?: Date;
    /**
     * Timestamp of electronic or paper record that FEC received
     */
    maxFiledDate?: Date;
    /**
     * Selects all items distributed by this committee after this date
     */
    minDisseminationDate?: Date;
    /**
     * Selects all items expended by this committee greater than this amount
     */
    minExpenditureAmount?: number;
    /**
     * Selects all items expended by this committee after this date
     */
    minExpenditureDate?: Date;
    /**
     * Timestamp of electronic or paper record that FEC received
     */
    minFiledDate?: Date;
    /**
     *
     * @remarks
     * The report associated with the transaction is either new or is the most-recently filed amendment. Undetermined version (`null`) is always included.
     *
     */
    mostRecent?: boolean;
    /**
     * For paginating through results, starting at page 1
     */
    page?: number;
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
     * The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
     */
    spenderName?: string[];
    /**
     * Explains if the money was spent in order to support or oppose a candidate or candidates. (Coded S or O for support or oppose.) This indicator applies to independent expenditures and communication costs.
     */
    supportOpposeIndicator?: GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum[];
}
export declare class GetSchedulesScheduleEEfileResponse extends SpeakeasyBase {
    contentType: string;
    scheduleEEfilePage?: shared.ScheduleEEfilePage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
