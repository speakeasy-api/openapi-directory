import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateBackupRequestBody extends SpeakeasyBase {
    withUploads: boolean;
}
/**
 * success response
 */
export declare class CreateBackup200ApplicationJSON extends SpeakeasyBase {
    success: string;
}
export declare class CreateBackupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success response
     */
    createBackup200ApplicationJSONObject?: CreateBackup200ApplicationJSON;
}
