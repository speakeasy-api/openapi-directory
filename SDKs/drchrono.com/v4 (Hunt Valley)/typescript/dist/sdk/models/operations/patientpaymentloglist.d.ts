import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientPaymentLogListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    office?: number;
    pageSize?: number;
    since?: string;
}
export declare class PatientPaymentLogListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class PatientPaymentLogList200ApplicationJson extends SpeakeasyBase {
    data?: shared.CashPaymentLog[];
    next?: string;
    previous?: string;
}
export declare class PatientPaymentLogListRequest extends SpeakeasyBase {
    queryParams: PatientPaymentLogListQueryParams;
    security: PatientPaymentLogListSecurity;
}
export declare class PatientPaymentLogListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patientPaymentLogList200ApplicationJSONObject?: PatientPaymentLogList200ApplicationJson;
}
