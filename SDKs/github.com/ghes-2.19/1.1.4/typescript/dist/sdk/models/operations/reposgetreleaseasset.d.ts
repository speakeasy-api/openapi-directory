import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetReleaseAssetRequest extends SpeakeasyBase {
    /**
     * asset_id parameter
     */
    assetId: number;
    owner: string;
    repo: string;
}
/**
 * Preview header missing
 */
export declare class ReposGetReleaseAsset415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReposGetReleaseAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/enterprise-server@2.19/rest/overview/media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.
     */
    releaseAsset?: shared.ReleaseAsset;
    /**
     * Preview header missing
     */
    reposGetReleaseAsset415ApplicationJSONObject?: ReposGetReleaseAsset415ApplicationJSON;
}
