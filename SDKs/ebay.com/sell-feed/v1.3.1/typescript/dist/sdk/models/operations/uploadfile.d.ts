import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadFileSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class UploadFileRequest extends SpeakeasyBase {
    formDataContentDisposition?: shared.FormDataContentDisposition;
    /**
     * The task_id associated with the file that will be uploaded. This ID was generated when the specified task was created.
     */
    taskId: string;
}
export declare class UploadFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    uploadFile200ApplicationJSONObject?: Record<string, any>;
}
