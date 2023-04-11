import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetImagesIdSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetImagesIdRequest extends SpeakeasyBase {
    /**
     * The ID of the image resource to load.
     */
    id: string;
}
/**
 * Success
 */
export declare class GetImagesId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Image;
    /**
     * Links related to the retrieved resource
     */
    links?: shared.ResourceLink;
}
export declare class GetImagesIdResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getImagesId200ApplicationVndApiPlusJsonObject?: GetImagesId200ApplicationVndApiPlusJson;
}
