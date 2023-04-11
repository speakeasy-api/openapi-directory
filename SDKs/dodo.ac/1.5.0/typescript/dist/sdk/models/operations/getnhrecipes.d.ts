import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNhRecipesRequest extends SpeakeasyBase {
    /**
     * The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.
     */
    acceptVersion: string;
    /**
     * Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.
     */
    xApiKey: string;
    /**
     * When set to `true`, only recipe names are returned. Instead of an array of objects with all details, the return will be an array of strings.
     */
    excludedetails?: string;
    /**
     * Specify a material to only get recipes that use that material. You can specify `material` up to six times (no recipe uses more than six materials).
     */
    material?: string;
    /**
     * Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL. Note that requesting specific image sizes for long lists may result in a very long response time.
     */
    thumbsize?: number;
}
export declare class GetNhRecipesResponse extends SpeakeasyBase {
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
     * A JSON array of recipes.
     */
    nhRecipes?: shared.NHRecipe[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
