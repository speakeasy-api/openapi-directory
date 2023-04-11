import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCommitteeCommitteeIdCandidatesHistoryCycleRequest extends SpeakeasyBase {
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
    committeeId: string;
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
    cycle: number;
    /**
     * `True` indicates that full election period of a candidate.
     *
     * @remarks
     * `False` indicates that two year election cycle.
     */
    electionFull?: boolean;
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
}
export declare class GetCommitteeCommitteeIdCandidatesHistoryCycleResponse extends SpeakeasyBase {
    candidateHistoryPage?: shared.CandidateHistoryPage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
