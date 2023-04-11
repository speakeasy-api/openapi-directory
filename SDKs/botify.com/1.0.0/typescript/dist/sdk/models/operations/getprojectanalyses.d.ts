import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectAnalysesRequest extends SpeakeasyBase {
    /**
     * Page Number
     */
    page?: number;
    /**
     * Project's identifier
     */
    projectSlug: string;
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
export declare class GetProjectAnalyses200ApplicationJSON extends SpeakeasyBase {
    count?: number;
    next?: string;
    page?: number;
    previous?: string;
    results?: shared.Analysis[];
    size?: number;
}
export declare class GetProjectAnalysesResponse extends SpeakeasyBase {
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
    getProjectAnalyses200ApplicationJSONObject?: GetProjectAnalyses200ApplicationJSON;
}
