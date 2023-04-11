import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StorageGetFileDownloadSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class StorageGetFileDownloadRequest extends SpeakeasyBase {
    /**
     * File unique ID.
     */
    fileId: string;
}
export declare class StorageGetFileDownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
