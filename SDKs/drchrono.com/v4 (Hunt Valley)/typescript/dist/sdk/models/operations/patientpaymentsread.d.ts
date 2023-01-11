import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientPaymentsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientPaymentsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientPaymentsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientPaymentsReadRequest extends SpeakeasyBase {
    pathParams: PatientPaymentsReadPathParams;
    queryParams: PatientPaymentsReadQueryParams;
    security: PatientPaymentsReadSecurity;
}
export declare class PatientPaymentsReadResponse extends SpeakeasyBase {
    cashPayment?: shared.CashPayment;
    contentType: string;
    statusCode: number;
}
