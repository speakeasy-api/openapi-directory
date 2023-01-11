import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientsCreateQueryParams extends SpeakeasyBase {
    chartId?: string;
    dateOfBirth?: string;
    doctor?: number;
    email?: string;
    ethnicity?: string;
    firstName?: string;
    gender?: string;
    lastName?: string;
    preferredLanguage?: string;
    race?: string;
    since?: string;
}
export declare class PatientsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientsCreateRequest extends SpeakeasyBase {
    queryParams: PatientsCreateQueryParams;
    security: PatientsCreateSecurity;
}
export declare class PatientsCreateResponse extends SpeakeasyBase {
    contentType: string;
    patient?: shared.Patient;
    statusCode: number;
}
