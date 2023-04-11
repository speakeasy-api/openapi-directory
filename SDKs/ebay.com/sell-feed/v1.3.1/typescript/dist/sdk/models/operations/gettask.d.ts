import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTaskSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetTaskRequest extends SpeakeasyBase {
    /**
     * The ID of the task. This ID was generated when the task was created.
     */
    taskId: string;
}
export declare class GetTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    task?: shared.Task;
}
