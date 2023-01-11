import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientFlagTypesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientFlagTypesReadQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class PatientFlagTypesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientFlagTypesReadRequest extends SpeakeasyBase {
    pathParams: PatientFlagTypesReadPathParams;
    queryParams: PatientFlagTypesReadQueryParams;
    security: PatientFlagTypesReadSecurity;
}
export declare class PatientFlagTypesReadResponse extends SpeakeasyBase {
    contentType: string;
    patientFlagType?: shared.PatientFlagType;
    statusCode: number;
}
