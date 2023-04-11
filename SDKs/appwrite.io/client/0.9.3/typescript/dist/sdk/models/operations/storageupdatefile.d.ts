import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StorageUpdateFileSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class StorageUpdateFileRequestBody extends SpeakeasyBase {
    /**
     * An array of strings with read permissions. By default no user is granted with any read permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.
     */
    read: string[];
    /**
     * An array of strings with write permissions. By default no user is granted with any write permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.
     */
    write: string[];
}
export declare class StorageUpdateFileRequest extends SpeakeasyBase {
    requestBody?: StorageUpdateFileRequestBody;
    /**
     * File unique ID.
     */
    fileId: string;
}
export declare class StorageUpdateFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * File
     */
    file?: shared.File;
}
