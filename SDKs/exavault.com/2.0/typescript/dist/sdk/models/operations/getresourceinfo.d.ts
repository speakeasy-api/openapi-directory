import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourceInfoRequest extends SpeakeasyBase {
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
    /**
     * Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerUser**.
     */
    include?: string;
    /**
     * Resource identifier of the file or folder to get metadata for.
     */
    resource: string;
}
export declare class GetResourceInfoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    resourceResponse?: shared.ResourceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
