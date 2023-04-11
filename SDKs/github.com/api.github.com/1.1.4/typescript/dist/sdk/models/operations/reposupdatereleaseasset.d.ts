import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposUpdateReleaseAssetRequestBody extends SpeakeasyBase {
    /**
     * An alternate short description of the asset. Used in place of the filename.
     */
    label?: string;
    /**
     * The file name of the asset.
     */
    name?: string;
    state?: string;
}
export declare class ReposUpdateReleaseAssetRequest extends SpeakeasyBase {
    requestBody?: ReposUpdateReleaseAssetRequestBody;
    /**
     * The unique identifier of the asset.
     */
    assetId: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposUpdateReleaseAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    releaseAsset?: shared.ReleaseAsset;
}
