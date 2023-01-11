import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientsOnpatientAccessCreatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientsOnpatientAccessCreateQueryParams extends SpeakeasyBase {
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
export declare class PatientsOnpatientAccessCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientsOnpatientAccessCreateRequest extends SpeakeasyBase {
    pathParams: PatientsOnpatientAccessCreatePathParams;
    queryParams: PatientsOnpatientAccessCreateQueryParams;
    security: PatientsOnpatientAccessCreateSecurity;
}
export declare class PatientsOnpatientAccessCreateResponse extends SpeakeasyBase {
    contentType: string;
    patient?: shared.Patient;
    statusCode: number;
}
