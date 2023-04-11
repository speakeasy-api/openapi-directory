import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsGetBySlugRequest extends SpeakeasyBase {
    appSlug: string;
}
/**
 * Preview header missing
 */
export declare class AppsGetBySlug415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class AppsGetBySlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Preview header missing
     */
    appsGetBySlug415ApplicationJSONObject?: AppsGetBySlug415ApplicationJSON;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    integration?: shared.Integration;
}
