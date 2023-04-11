import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetResultFileSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetResultFileRequest extends SpeakeasyBase {
    /**
     * The ID of the task associated with the file you want to download. This ID was generated when the task was created.
     */
    taskId: string;
}
export declare class GetResultFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
