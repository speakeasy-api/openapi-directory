import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CommLogsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class CommLogsUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class CommLogsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class CommLogsUpdateRequest extends SpeakeasyBase {
    pathParams: CommLogsUpdatePathParams;
    queryParams: CommLogsUpdateQueryParams;
    security: CommLogsUpdateSecurity;
}
export declare class CommLogsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
