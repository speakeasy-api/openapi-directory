import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TasksPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TasksPartialUpdateRequest extends SpeakeasyBase {
    assigneeGroup?: number;
    assigneeUser?: number;
    category?: number;
    dueAtDate?: string;
    dueAtRange?: string;
    dueAtSince?: string;
    dueAtUnknown?: string;
    id: string;
    since?: string;
    status?: number;
}
export declare class TasksPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
