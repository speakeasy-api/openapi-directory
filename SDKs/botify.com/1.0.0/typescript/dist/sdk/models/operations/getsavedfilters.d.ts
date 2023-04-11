import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSavedFiltersRequest extends SpeakeasyBase {
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
export declare class GetSavedFilters200ApplicationJSON extends SpeakeasyBase {
    count?: number;
    next?: string;
    page?: number;
    previous?: string;
    results?: shared.ProjectSavedFilter[];
    size?: number;
}
export declare class GetSavedFiltersResponse extends SpeakeasyBase {
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
    getSavedFilters200ApplicationJSONObject?: GetSavedFilters200ApplicationJSON;
}
