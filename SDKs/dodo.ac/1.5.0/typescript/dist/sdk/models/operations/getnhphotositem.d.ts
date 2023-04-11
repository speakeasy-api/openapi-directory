import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNhPhotosItemRequest extends SpeakeasyBase {
    /**
     * The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.
     */
    acceptVersion: string;
    /**
     * Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.
     */
    xApiKey: string;
    /**
     * The name of the photo or poster you wish to retrieve information about.
     */
    item: string;
    /**
     * Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.
     */
    thumbsize?: number;
}
export declare class GetNhPhotosItemResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Failed to authenticate user from `X-API-KEY`.
     */
    error401?: shared.Error401;
    /**
     * There was an error fetching the requested data.
     */
    error500?: shared.Error500;
    /**
     * A JSON object describing the photo or poster.
     */
    nhPhoto?: shared.NHPhoto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
