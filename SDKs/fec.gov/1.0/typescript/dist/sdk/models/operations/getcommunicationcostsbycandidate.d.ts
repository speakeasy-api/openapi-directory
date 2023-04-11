import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Federal office candidate runs for: H, S or P
 */
export declare enum GetCommunicationCostsByCandidateOfficeEnum {
    House = "house",
    Senate = "senate",
    President = "president"
}
/**
 * Support or opposition
 */
export declare enum GetCommunicationCostsByCandidateSupportOpposeEnum {
    S = "S",
    O = "O"
}
export declare class GetCommunicationCostsByCandidateRequest extends SpeakeasyBase {
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
    office?: GetCommunicationCostsByCandidateOfficeEnum;
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
     * US state or territory where a candidate runs for office
     */
    state?: string;
    /**
     * Support or opposition
     */
    supportOppose?: GetCommunicationCostsByCandidateSupportOpposeEnum;
}
export declare class GetCommunicationCostsByCandidateResponse extends SpeakeasyBase {
    communicationCostByCandidatePage?: shared.CommunicationCostByCandidatePage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
