import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientPhysicalExamsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientPhysicalExamsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientPhysicalExamsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientPhysicalExamsReadRequest extends SpeakeasyBase {
    pathParams: PatientPhysicalExamsReadPathParams;
    queryParams: PatientPhysicalExamsReadQueryParams;
    security: PatientPhysicalExamsReadSecurity;
}
export declare class PatientPhysicalExamsReadResponse extends SpeakeasyBase {
    contentType: string;
    patientPhysicalExam?: shared.PatientPhysicalExam;
    statusCode: number;
}
