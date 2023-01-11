import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProceduresListQueryParams extends SpeakeasyBase {
    appointment?: number;
    cursor?: string;
    doctor?: number;
    muDate?: string;
    muDateRange?: string;
    pageSize?: number;
    patient?: number;
    serviceDate?: string;
}
export declare class ProceduresListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class ProceduresList200ApplicationJson extends SpeakeasyBase {
    data?: shared.BillingLineItem[];
    next?: string;
    previous?: string;
}
export declare class ProceduresListRequest extends SpeakeasyBase {
    queryParams: ProceduresListQueryParams;
    security: ProceduresListSecurity;
}
export declare class ProceduresListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    proceduresList200ApplicationJSONObject?: ProceduresList200ApplicationJson;
}
