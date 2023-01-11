import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AmendmentsCreateQueryParams extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    patient?: number;
}
export declare class AmendmentsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AmendmentsCreateRequest extends SpeakeasyBase {
    queryParams: AmendmentsCreateQueryParams;
    security: AmendmentsCreateSecurity;
}
export declare class AmendmentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    patientAmendment?: shared.PatientAmendment;
    statusCode: number;
}
