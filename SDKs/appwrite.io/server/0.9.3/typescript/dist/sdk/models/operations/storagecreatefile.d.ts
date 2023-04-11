import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StorageCreateFileSecurity extends SpeakeasyBase {
    jwt: string;
    key: string;
    project: string;
}
export declare class StorageCreateFileRequestBody extends SpeakeasyBase {
    /**
     * Binary file.
     */
    file: string;
    /**
     * An array of strings with read permissions. By default only the current user is granted with read permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.
     */
    read?: string[];
    /**
     * An array of strings with write permissions. By default only the current user is granted with write permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.
     */
    write?: string[];
}
export declare class StorageCreateFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * File
     */
    file?: shared.File;
}
