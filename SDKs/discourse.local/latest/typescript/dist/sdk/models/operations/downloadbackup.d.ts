import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DownloadBackupRequest extends SpeakeasyBase {
    filename: string;
    token: string;
}
export declare class DownloadBackupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
