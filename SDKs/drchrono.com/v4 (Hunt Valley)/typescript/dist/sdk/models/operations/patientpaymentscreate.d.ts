import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientPaymentsCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientPaymentsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientPaymentsCreateRequest extends SpeakeasyBase {
    queryParams: PatientPaymentsCreateQueryParams;
    security: PatientPaymentsCreateSecurity;
}
export declare class PatientPaymentsCreateResponse extends SpeakeasyBase {
    cashPayment?: shared.CashPayment;
    contentType: string;
    statusCode: number;
}
