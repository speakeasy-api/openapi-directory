import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaskStatusesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskStatusesCreateRequest extends SpeakeasyBase {
    since?: string;
}
export declare class TaskStatusesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    taskStatus?: shared.TaskStatus;
}
