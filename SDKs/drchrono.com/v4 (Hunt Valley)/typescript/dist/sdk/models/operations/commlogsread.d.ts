import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CommLogsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class CommLogsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class CommLogsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class CommLogsReadRequest extends SpeakeasyBase {
    pathParams: CommLogsReadPathParams;
    queryParams: CommLogsReadQueryParams;
    security: CommLogsReadSecurity;
}
export declare class CommLogsReadResponse extends SpeakeasyBase {
    contentType: string;
    phoneCallLog?: shared.PhoneCallLog;
    statusCode: number;
}
