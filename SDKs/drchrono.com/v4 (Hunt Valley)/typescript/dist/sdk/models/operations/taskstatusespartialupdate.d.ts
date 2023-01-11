import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskStatusesPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class TaskStatusesPartialUpdateQueryParams extends SpeakeasyBase {
    since?: string;
}
export declare class TaskStatusesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TaskStatusesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: TaskStatusesPartialUpdatePathParams;
    queryParams: TaskStatusesPartialUpdateQueryParams;
    security: TaskStatusesPartialUpdateSecurity;
}
export declare class TaskStatusesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
