import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposDeletePagesSiteRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
}
/**
 * Preview header missing
 */
export declare class ReposDeletePagesSite415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReposDeletePagesSiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Preview header missing
     */
    reposDeletePagesSite415ApplicationJSONObject?: ReposDeletePagesSite415ApplicationJSON;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
