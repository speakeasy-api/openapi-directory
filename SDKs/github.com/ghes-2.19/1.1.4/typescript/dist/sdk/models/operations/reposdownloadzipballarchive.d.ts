import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReposDownloadZipballArchiveRequest extends SpeakeasyBase {
    owner: string;
    ref: string;
    repo: string;
}
export declare class ReposDownloadZipballArchiveResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
