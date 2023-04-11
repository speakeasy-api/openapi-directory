import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ReposUploadReleaseAssetServerList: readonly ["https://{origin}"];
export declare class ReposUploadReleaseAssetRequest extends SpeakeasyBase {
    requestBody?: string;
    label?: string;
    name: string;
    owner: string;
    /**
     * release_id parameter
     */
    releaseId: number;
    repo: string;
}
export declare class ReposUploadReleaseAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response for successful upload
     */
    releaseAsset?: shared.ReleaseAsset;
}
