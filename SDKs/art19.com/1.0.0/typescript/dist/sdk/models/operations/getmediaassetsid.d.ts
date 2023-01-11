import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMediaAssetsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetMediaAssetsId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.MediaAsset;
    links?: shared.ResourceLink;
}
export declare class GetMediaAssetsIdRequest extends SpeakeasyBase {
    pathParams: GetMediaAssetsIdPathParams;
}
export declare class GetMediaAssetsIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getMediaAssetsId200ApplicationVndApiPlusJsonObject?: GetMediaAssetsId200ApplicationVndApiPlusJson;
}
