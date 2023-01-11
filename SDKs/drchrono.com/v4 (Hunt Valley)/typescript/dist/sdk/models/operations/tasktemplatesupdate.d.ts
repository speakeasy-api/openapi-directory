import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskTemplatesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class TaskTemplatesUpdateQueryParams extends SpeakeasyBase {
    assigneeGroup?: number;
    assigneeUser?: number;
    category?: number;
    since?: string;
    status?: number;
}
export declare class TaskTemplatesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TaskTemplatesUpdateRequest extends SpeakeasyBase {
    pathParams: TaskTemplatesUpdatePathParams;
    queryParams: TaskTemplatesUpdateQueryParams;
    security: TaskTemplatesUpdateSecurity;
}
export declare class TaskTemplatesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
