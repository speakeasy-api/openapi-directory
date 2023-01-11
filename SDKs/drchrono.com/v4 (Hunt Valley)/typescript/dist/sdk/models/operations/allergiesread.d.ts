import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AllergiesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class AllergiesReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class AllergiesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AllergiesReadRequest extends SpeakeasyBase {
    pathParams: AllergiesReadPathParams;
    queryParams: AllergiesReadQueryParams;
    security: AllergiesReadSecurity;
}
export declare class AllergiesReadResponse extends SpeakeasyBase {
    contentType: string;
    patientAllergy?: shared.PatientAllergy;
    statusCode: number;
}
