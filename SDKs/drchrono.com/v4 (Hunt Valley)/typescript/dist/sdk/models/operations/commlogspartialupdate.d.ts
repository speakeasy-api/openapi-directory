import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CommLogsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class CommLogsPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class CommLogsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class CommLogsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: CommLogsPartialUpdatePathParams;
    queryParams: CommLogsPartialUpdateQueryParams;
    security: CommLogsPartialUpdateSecurity;
}
export declare class CommLogsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
