import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskStatusesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class TaskStatusesUpdateQueryParams extends SpeakeasyBase {
    since?: string;
}
export declare class TaskStatusesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TaskStatusesUpdateRequest extends SpeakeasyBase {
    pathParams: TaskStatusesUpdatePathParams;
    queryParams: TaskStatusesUpdateQueryParams;
    security: TaskStatusesUpdateSecurity;
}
export declare class TaskStatusesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
