import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientsReadQueryParams extends SpeakeasyBase {
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
export declare class PatientsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientsReadRequest extends SpeakeasyBase {
    pathParams: PatientsReadPathParams;
    queryParams: PatientsReadQueryParams;
    security: PatientsReadSecurity;
}
export declare class PatientsReadResponse extends SpeakeasyBase {
    contentType: string;
    patient?: shared.Patient;
    statusCode: number;
}
