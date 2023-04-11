import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Federal office candidate runs for: H, S or P
 */
export declare enum GetElectionsSummaryOfficeEnum {
    House = "house",
    Senate = "senate",
    President = "president"
}
export declare class GetElectionsSummaryRequest extends SpeakeasyBase {
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
     * Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
     */
    district?: string;
    /**
     * `True` indicates that full election period of a candidate.
     *
     * @remarks
     * `False` indicates that two year election cycle.
     */
    electionFull?: boolean;
    /**
     * Federal office candidate runs for: H, S or P
     */
    office: GetElectionsSummaryOfficeEnum;
    /**
     * US state or territory where a candidate runs for office
     */
    state?: string;
}
export declare class GetElectionsSummaryResponse extends SpeakeasyBase {
    contentType: string;
    electionSummary?: shared.ElectionSummary;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
