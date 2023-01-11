import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientPaymentLogReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientPaymentLogReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    office?: number;
    since?: string;
}
export declare class PatientPaymentLogReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientPaymentLogReadRequest extends SpeakeasyBase {
    pathParams: PatientPaymentLogReadPathParams;
    queryParams: PatientPaymentLogReadQueryParams;
    security: PatientPaymentLogReadSecurity;
}
export declare class PatientPaymentLogReadResponse extends SpeakeasyBase {
    cashPaymentLog?: shared.CashPaymentLog;
    contentType: string;
    statusCode: number;
}
