import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourceInfoByIdRequest extends SpeakeasyBase {
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
    /**
     * ID number of the resource
     */
    id: number;
    /**
     * Comma separated list of relationships to include in response. Possible values are **share**, **notifications**, **directFile**, **parentResource**, **ownerUser**, **ownerAccount**.
     */
    include?: string;
}
export declare class GetResourceInfoByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    resourceResponse?: shared.ResourceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
