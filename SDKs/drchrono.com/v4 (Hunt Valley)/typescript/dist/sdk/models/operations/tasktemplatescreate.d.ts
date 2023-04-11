import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaskTemplatesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskTemplatesCreateRequest extends SpeakeasyBase {
    assigneeGroup?: number;
    assigneeUser?: number;
    category?: number;
    since?: string;
    status?: number;
}
export declare class TaskTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    taskTemplate?: shared.TaskTemplate;
}
