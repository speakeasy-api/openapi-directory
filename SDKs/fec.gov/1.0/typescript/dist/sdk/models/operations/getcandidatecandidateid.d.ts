import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCandidateCandidateIdCandidateStatusEnum {
    Unknown = "",
    C = "C",
    F = "F",
    N = "N",
    P = "P"
}
export declare enum GetCandidateCandidateIdIncumbentChallengeEnum {
    Unknown = "",
    I = "I",
    C = "C",
    O = "O"
}
export declare enum GetCandidateCandidateIdOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}
export declare class GetCandidateCandidateIdRequest extends SpeakeasyBase {
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
    candidateId: string;
    /**
     * One-letter code explaining if the candidate is:
     *
     * @remarks
     *         - C present candidate
     *         - F future candidate
     *         - N not yet a candidate
     *         - P prior candidate
     *
     */
    candidateStatus?: GetCandidateCandidateIdCandidateStatusEnum[];
    /**
     *
     * @remarks
     * Two-year election cycle in which a candidate runs for office.
     * Calculated from Form 2. The cycle begins with
     * an odd year and is named for its ending, even year. This cycle follows
     * the traditional house election cycle and subdivides the presidential
     * and Senate elections into comparable two-year blocks. To retrieve data for
     * the entire four years of a presidential term or six years of a senatorial term,
     * you will need the `election_full` flag.
     *
     */
    cycle?: number[];
    /**
     * Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
     */
    district?: string[];
    /**
     * Year of election
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
     * One-letter code ('I', 'C', 'O') explaining if the candidate is an incumbent, a challenger, or if the seat is open.
     */
    incumbentChallenge?: GetCandidateCandidateIdIncumbentChallengeEnum[];
    /**
     * Name (candidate or committee) to search for. Alias for 'q'.
     */
    name?: string[];
    /**
     * Federal office candidate runs for: H, S or P
     */
    office?: GetCandidateCandidateIdOfficeEnum[];
    /**
     * For paginating through results, starting at page 1
     */
    page?: number;
    /**
     * Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
     */
    party?: string[];
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
     * US state or territory where a candidate runs for office
     */
    state?: string[];
    /**
     * Retrieve records pertaining to a particular election year. The list of election years is based on a candidate filing a statement of candidacy (F2) for that year.
     */
    year?: string;
}
export declare class GetCandidateCandidateIdResponse extends SpeakeasyBase {
    candidateDetailPage?: shared.CandidateDetailPage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
