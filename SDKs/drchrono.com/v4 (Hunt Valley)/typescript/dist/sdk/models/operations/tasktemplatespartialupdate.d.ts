import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TaskTemplatesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskTemplatesPartialUpdateRequest extends SpeakeasyBase {
    assigneeGroup?: number;
    assigneeUser?: number;
    category?: number;
    id: string;
    since?: string;
    status?: number;
}
export declare class TaskTemplatesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
