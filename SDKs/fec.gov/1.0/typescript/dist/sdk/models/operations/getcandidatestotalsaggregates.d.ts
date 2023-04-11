import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Candidate totals aggregate_by (Chose one of dropdown options):
 *
 * @remarks
 *         - ' ' grouped by election year
 *         - office grouped by election year, by office
 *         - office-state grouped by election year, by office, by state
 *         - office-state-district grouped by election year, by office, by state, by district
 *         - office-party grouped by election year, by office, by party
 *
 */
export declare enum GetCandidatesTotalsAggregatesAggregateByEnum {
    Office = "office",
    OfficeState = "office-state",
    OfficeStateDistrict = "office-state-district",
    OfficeParty = "office-party"
}
/**
 * Federal office candidate runs for: H, S or P
 */
export declare enum GetCandidatesTotalsAggregatesOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}
/**
 * Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
 */
export declare enum GetCandidatesTotalsAggregatesPartyEnum {
    Unknown = "",
    Dem = "DEM",
    Rep = "REP",
    Other = "OTHER"
}
export declare class GetCandidatesTotalsAggregatesRequest extends SpeakeasyBase {
    /**
     * Candidate totals aggregate_by (Chose one of dropdown options):
     *
     * @remarks
     *         - ' ' grouped by election year
     *         - office grouped by election year, by office
     *         - office-state grouped by election year, by office, by state
     *         - office-state-district grouped by election year, by office, by state, by district
     *         - office-party grouped by election year, by office, by party
     *
     */
    aggregateBy?: GetCandidatesTotalsAggregatesAggregateByEnum;
    /**
     *
     * @remarks
     * API key for https://api.data.gov. Get one at https://api.data.gov/signup.
     *
     */
    apiKey: string;
    /**
     * Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
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
    office?: GetCandidatesTotalsAggregatesOfficeEnum;
    /**
     * For paginating through results, starting at page 1
     */
    page?: number;
    /**
     * Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
     */
    party?: GetCandidatesTotalsAggregatesPartyEnum;
    /**
     * The number of results returned per page. Defaults to 20.
     */
    perPage?: number;
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
     * US state or territory where a candidate runs for office
     */
    state?: string[];
}
export declare class GetCandidatesTotalsAggregatesResponse extends SpeakeasyBase {
    candidateTotalAggregatePage?: shared.CandidateTotalAggregatePage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
