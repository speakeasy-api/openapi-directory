import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StorageDeleteFileSecurity extends SpeakeasyBase {
    jwt: string;
    key: string;
    project: string;
}
export declare class StorageDeleteFileRequest extends SpeakeasyBase {
    /**
     * File unique ID.
     */
    fileId: string;
}
export declare class StorageDeleteFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
