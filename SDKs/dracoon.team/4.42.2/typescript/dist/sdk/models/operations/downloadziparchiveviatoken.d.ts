import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DownloadZipArchiveViaTokenRequest extends SpeakeasyBase {
    /**
     * Download token
     */
    token: string;
}
export declare class DownloadZipArchiveViaTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
