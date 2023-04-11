import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCoachesRequest extends SpeakeasyBase {
    /**
     * First name filter
     */
    firstName?: string;
    /**
     * Last name filter
     */
    lastName?: string;
    /**
     * Maximum year filter (inclusive)
     */
    maxYear?: number;
    /**
     * Minimum year filter (inclusive)
     */
    minYear?: number;
    /**
     * Team name filter
     */
    team?: string;
    /**
     * Year filter
     */
    year?: number;
}
export declare class GetCoachesResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    coaches?: shared.Coach[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
