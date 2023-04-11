import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReposDeleteReleaseAssetRequest extends SpeakeasyBase {
    /**
     * asset_id parameter
     */
    assetId: number;
    owner: string;
    repo: string;
}
export declare class ReposDeleteReleaseAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
