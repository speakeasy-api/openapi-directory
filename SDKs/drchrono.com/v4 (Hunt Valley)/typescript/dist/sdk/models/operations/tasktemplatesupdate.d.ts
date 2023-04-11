import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TaskTemplatesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskTemplatesUpdateRequest extends SpeakeasyBase {
    assigneeGroup?: number;
    assigneeUser?: number;
    category?: number;
    id: string;
    since?: string;
    status?: number;
}
export declare class TaskTemplatesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
