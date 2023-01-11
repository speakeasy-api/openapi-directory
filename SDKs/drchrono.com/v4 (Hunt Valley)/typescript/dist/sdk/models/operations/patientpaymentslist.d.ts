import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientPaymentsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
    since?: string;
}
export declare class PatientPaymentsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class PatientPaymentsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.CashPayment[];
    next?: string;
    previous?: string;
}
export declare class PatientPaymentsListRequest extends SpeakeasyBase {
    queryParams: PatientPaymentsListQueryParams;
    security: PatientPaymentsListSecurity;
}
export declare class PatientPaymentsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patientPaymentsList200ApplicationJSONObject?: PatientPaymentsList200ApplicationJson;
}
