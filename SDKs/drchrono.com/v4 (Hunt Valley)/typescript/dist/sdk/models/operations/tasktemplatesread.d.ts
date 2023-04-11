import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaskTemplatesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskTemplatesReadRequest extends SpeakeasyBase {
    assigneeGroup?: number;
    assigneeUser?: number;
    category?: number;
    id: string;
    since?: string;
    status?: number;
}
export declare class TaskTemplatesReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskTemplate?: shared.TaskTemplate;
}
