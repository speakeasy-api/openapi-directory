import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetInputFileSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetInputFileRequest extends SpeakeasyBase {
    /**
     * The task ID associated with the file to be downloaded.
     */
    taskId: string;
}
export declare class GetInputFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
