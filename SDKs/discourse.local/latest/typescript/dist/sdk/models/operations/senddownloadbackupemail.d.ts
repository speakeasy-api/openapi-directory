import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SendDownloadBackupEmailRequest extends SpeakeasyBase {
    filename: string;
}
export declare class SendDownloadBackupEmailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
