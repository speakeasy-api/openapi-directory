import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Federal office candidate runs for: H, S or P
 */
export declare enum GetCandidatesTotalsByOfficeOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}
export declare class GetCandidatesTotalsByOfficeRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * API key for https://api.data.gov. Get one at https://api.data.gov/signup.
     *
     */
    apiKey: string;
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
     *  Candidates who are actively seeking office. If no value is specified, all candidates
     *
     * @remarks
     * are returned. When True is specified, only active candidates are returned. When False is
     * specified, only inactive candidates are returned.
     *
     */
    isActiveCandidate?: boolean;
    /**
     *
     * @remarks
     * Filter records to only those that are applicable to a given two-year
     * period. This cycle follows the traditional House election cycle and
     * subdivides the presidential and Senate elections into comparable
     * two-year blocks. The cycle begins with an odd year and is named for its
     * ending, even year.
     *
     */
    maxElectionCycle?: number;
    /**
     *
     * @remarks
     * Filter records to only those that are applicable to a given two-year
     * period. This cycle follows the traditional House election cycle and
     * subdivides the presidential and Senate elections into comparable
     * two-year blocks. The cycle begins with an odd year and is named for its
     * ending, even year.
     *
     */
    minElectionCycle?: number;
    /**
     * Federal office candidate runs for: H, S or P
     */
    office?: GetCandidatesTotalsByOfficeOfficeEnum;
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
export declare class GetCandidatesTotalsByOfficeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    totalByOfficePage?: shared.TotalByOfficePage;
}
