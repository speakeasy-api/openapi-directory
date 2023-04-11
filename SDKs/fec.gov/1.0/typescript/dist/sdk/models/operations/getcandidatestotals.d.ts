import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCandidatesTotalsOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}
export declare class GetCandidatesTotalsRequest extends SpeakeasyBase {
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
     *
     * @remarks
     * Filter records to only those that were applicable to a given
     * two-year period.The cycle begins with an odd year and is named
     * for its ending, even year.
     *
     */
    cycle?: number[];
    /**
     * District of candidate
     */
    district?: string[];
    /**
     * `True` indicates that full election period of a candidate.
     *
     * @remarks
     * `False` indicates that two year election cycle.
     */
    electionFull?: boolean;
    /**
     *
     * @remarks
     * Filter records to only those that were applicable to a given
     * two-year period.The cycle begins with an odd year and is named
     * for its ending, even year.
     *
     */
    electionYear?: number[];
    /**
     * A boolean the describes if a presidential candidate has accepted federal funds. The flag will be false for House and Senate candidates.
     */
    federalFundsFlag?: boolean;
    /**
     * A boolean that describes if a candidate's committee has ever received any receipts for their campaign for this particular office. (Candidates have separate candidate IDs for each office.)
     */
    hasRaisedFunds?: boolean;
    /**
     *  Candidates who are actively seeking office. If no value is specified, all candidates
     *
     * @remarks
     * are returned. When True is specified, only active candidates are returned. When False is
     * specified, only inactive candidates are returned.
     *
     */
    isActiveCandidate?: boolean;
    /**
     * Maximum cash on hand
     */
    maxCashOnHandEndPeriod?: string;
    /**
     * Maximum debt
     */
    maxDebtsOwedByCommittee?: string;
    /**
     * Maximum aggregated disbursements
     */
    maxDisbursements?: string;
    /**
     * Maximum aggregated receipts
     */
    maxReceipts?: string;
    /**
     * Minimum cash on hand
     */
    minCashOnHandEndPeriod?: string;
    /**
     * Minimum debt
     */
    minDebtsOwedByCommittee?: string;
    /**
     * Minimum aggregated disbursements
     */
    minDisbursements?: string;
    /**
     * Minimum aggregated receipts
     */
    minReceipts?: string;
    /**
     * Federal office candidate runs for: H, S or P
     */
    office?: GetCandidatesTotalsOfficeEnum[];
    /**
     * For paginating through results, starting at page 1
     */
    page?: number;
    /**
     * Three-letter party code
     */
    party?: string[];
    /**
     * The number of results returned per page. Defaults to 20.
     */
    perPage?: number;
    /**
     * Name of candidate running for office
     */
    q?: string[];
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
     * State of candidate
     */
    state?: string[];
}
export declare class GetCandidatesTotalsResponse extends SpeakeasyBase {
    candidateHistoryTotalPage?: shared.CandidateHistoryTotalPage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
