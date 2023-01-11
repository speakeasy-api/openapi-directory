import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientsOnpatientAccessReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientsOnpatientAccessReadQueryParams extends SpeakeasyBase {
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
export declare class PatientsOnpatientAccessReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientsOnpatientAccessReadRequest extends SpeakeasyBase {
    pathParams: PatientsOnpatientAccessReadPathParams;
    queryParams: PatientsOnpatientAccessReadQueryParams;
    security: PatientsOnpatientAccessReadSecurity;
}
export declare class PatientsOnpatientAccessReadResponse extends SpeakeasyBase {
    contentType: string;
    patient?: shared.Patient;
    statusCode: number;
}
