import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserProjectsRequest extends SpeakeasyBase {
    /**
     * Page Number
     */
    page?: number;
    /**
     * Page Size
     */
    size?: number;
    /**
     * User's identifier
     */
    username: string;
}
/**
 * Successful operation
 */
export declare class GetUserProjects200ApplicationJSON extends SpeakeasyBase {
    count?: number;
    next?: string;
    page?: number;
    previous?: string;
    results?: shared.Project[];
    size?: number;
}
export declare class GetUserProjectsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * error payload
     */
    defaultPayload?: shared.DefaultPayload;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getUserProjects200ApplicationJSONObject?: GetUserProjects200ApplicationJSON;
}
