import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskTemplatesPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class TaskTemplatesPartialUpdateQueryParams extends SpeakeasyBase {
    assigneeGroup?: number;
    assigneeUser?: number;
    category?: number;
    since?: string;
    status?: number;
}
export declare class TaskTemplatesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TaskTemplatesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: TaskTemplatesPartialUpdatePathParams;
    queryParams: TaskTemplatesPartialUpdateQueryParams;
    security: TaskTemplatesPartialUpdateSecurity;
}
export declare class TaskTemplatesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
