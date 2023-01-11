import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientInterventionsCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientInterventionsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientInterventionsCreateRequest extends SpeakeasyBase {
    queryParams: PatientInterventionsCreateQueryParams;
    security: PatientInterventionsCreateSecurity;
}
export declare class PatientInterventionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    patientIntervention?: shared.PatientIntervention;
    statusCode: number;
}
