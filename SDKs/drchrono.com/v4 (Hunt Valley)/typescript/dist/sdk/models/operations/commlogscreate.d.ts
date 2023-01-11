import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CommLogsCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class CommLogsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class CommLogsCreateRequest extends SpeakeasyBase {
    queryParams: CommLogsCreateQueryParams;
    security: CommLogsCreateSecurity;
}
export declare class CommLogsCreateResponse extends SpeakeasyBase {
    contentType: string;
    phoneCallLog?: shared.PhoneCallLog;
    statusCode: number;
}
