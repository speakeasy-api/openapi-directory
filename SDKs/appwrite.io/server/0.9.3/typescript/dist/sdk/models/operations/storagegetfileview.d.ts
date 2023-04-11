import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StorageGetFileViewSecurity extends SpeakeasyBase {
    jwt: string;
    key: string;
    project: string;
}
export declare class StorageGetFileViewRequest extends SpeakeasyBase {
    /**
     * File unique ID.
     */
    fileId: string;
}
export declare class StorageGetFileViewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
