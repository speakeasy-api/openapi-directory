import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specify the category of furniture to return (houswares, miscellaneous, or wall-mounted).
 */
export declare enum GetNhFurnitureCategoryEnum {
    Housewares = "Housewares",
    Miscellaneous = "Miscellaneous",
    WallMounted = "Wall-mounted"
}
export declare enum GetNhFurnitureColorEnum {
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
export declare class GetNhFurnitureRequest extends SpeakeasyBase {
    /**
     * The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.
     */
    acceptVersion: string;
    /**
     * Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.
     */
    xApiKey: string;
    /**
     * Specify the category of furniture to return (houswares, miscellaneous, or wall-mounted).
     */
    category?: GetNhFurnitureCategoryEnum;
    /**
     * Return furniture that matches the provided colors (may specify one or two colors).
     */
    color?: GetNhFurnitureColorEnum[];
    /**
     * When set to `true`, only furniture names are returned. Instead of an array of objects with all details, the return will be an array of strings.
     */
    excludedetails?: string;
}
export declare class GetNhFurnitureResponse extends SpeakeasyBase {
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
     * A JSON array of furniture.
     */
    nhFurnitures?: shared.NHFurniture[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
