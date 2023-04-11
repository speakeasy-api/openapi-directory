import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMediaAssetsIdSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetMediaAssetsIdRequest extends SpeakeasyBase {
    /**
     * The ID of the media asset resource to load.
     */
    id: string;
}
/**
 * Success
 */
export declare class GetMediaAssetsId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.MediaAsset;
    /**
     * Links related to the retrieved resource
     */
    links?: shared.ResourceLink;
}
export declare class GetMediaAssetsIdResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getMediaAssetsId200ApplicationVndApiPlusJsonObject?: GetMediaAssetsId200ApplicationVndApiPlusJson;
}
