import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetNhInteriorItemColorEnum {
    Aqua = "Aqua",
    Beige = "Beige",
    Black = "Black",
    Blue = "Blue",
    Brown = "Brown",
    Colorful = "Colorful",
    Gray = "Gray",
    Green = "Green",
    Orange = "Orange",
    Pink = "Pink",
    Purple = "Purple",
    Red = "Red",
    White = "White",
    Yellow = "Yellow"
}
export declare class GetNhInteriorItemRequest extends SpeakeasyBase {
    /**
     * The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.
     */
    acceptVersion: string;
    /**
     * Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.
     */
    xApiKey: string;
    /**
     * Return furniture that matches the provided colors (may specify one or two colors).
     */
    color?: GetNhInteriorItemColorEnum[];
    /**
     * The name of the interior item you wish to retrieve information about.
     */
    item: string;
    /**
     * Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.
     */
    thumbsize?: number;
}
export declare class GetNhInteriorItemResponse extends SpeakeasyBase {
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
     * A JSON object describing the interior item.
     */
    nhInterior?: shared.NHInterior;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
