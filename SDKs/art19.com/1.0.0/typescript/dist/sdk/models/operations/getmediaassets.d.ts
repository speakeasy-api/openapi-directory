import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMediaAssetsQueryParams extends SpeakeasyBase {
    ids: string[];
}
export declare class GetMediaAssets200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.MediaAsset[];
    links?: shared.Links;
}
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
**/
export declare class GetMediaAssets400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
    parameter?: string;
    pointer?: string;
}
export declare class GetMediaAssets400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
    code?: string;
    detail?: string;
    source?: GetMediaAssets400ApplicationVndApiPlusJsonErrorsSource;
    status?: string;
    title?: string;
}
export declare class GetMediaAssets400ApplicationVndApiPlusJson extends SpeakeasyBase {
    errors?: GetMediaAssets400ApplicationVndApiPlusJsonErrors[];
}
export declare class GetMediaAssetsRequest extends SpeakeasyBase {
    queryParams: GetMediaAssetsQueryParams;
}
export declare class GetMediaAssetsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getMediaAssets200ApplicationVndApiPlusJsonObject?: GetMediaAssets200ApplicationVndApiPlusJson;
    getMediaAssets400ApplicationVndApiPlusJsonObject?: GetMediaAssets400ApplicationVndApiPlusJson;
}
