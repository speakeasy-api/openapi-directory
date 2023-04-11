import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StorageGetFileSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class StorageGetFileRequest extends SpeakeasyBase {
    /**
     * File unique ID.
     */
    fileId: string;
}
export declare class StorageGetFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * File
     */
    file?: shared.File;
}
