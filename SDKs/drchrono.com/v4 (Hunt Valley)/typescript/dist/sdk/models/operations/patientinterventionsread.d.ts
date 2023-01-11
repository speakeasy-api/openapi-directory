import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientInterventionsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientInterventionsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientInterventionsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientInterventionsReadRequest extends SpeakeasyBase {
    pathParams: PatientInterventionsReadPathParams;
    queryParams: PatientInterventionsReadQueryParams;
    security: PatientInterventionsReadSecurity;
}
export declare class PatientInterventionsReadResponse extends SpeakeasyBase {
    contentType: string;
    patientIntervention?: shared.PatientIntervention;
    statusCode: number;
}
