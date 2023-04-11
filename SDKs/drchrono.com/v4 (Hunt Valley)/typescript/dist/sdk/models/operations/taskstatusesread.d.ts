import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaskStatusesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskStatusesReadRequest extends SpeakeasyBase {
    id: string;
    since?: string;
}
export declare class TaskStatusesReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskStatus?: shared.TaskStatus;
}
