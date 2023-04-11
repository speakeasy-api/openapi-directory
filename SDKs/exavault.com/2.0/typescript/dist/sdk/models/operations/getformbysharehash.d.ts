import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Related record types to include in the response. Valid option is **share**
 */
export declare enum GetFormByShareHashIncludeEnum {
    Share = "share"
}
export declare class GetFormByShareHashRequest extends SpeakeasyBase {
    /**
     * Access Token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API key required to make the API call.
     */
    evApiKey: string;
    /**
     * Related record types to include in the response. Valid option is **share**
     */
    include?: GetFormByShareHashIncludeEnum;
    /**
     * Share hash to retrieve the form for.
     */
    shareHash: string;
}
export declare class GetFormByShareHashResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    formResponse?: shared.FormResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
