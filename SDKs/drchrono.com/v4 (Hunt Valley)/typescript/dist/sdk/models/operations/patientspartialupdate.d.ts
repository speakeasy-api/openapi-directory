import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientsPartialUpdateQueryParams extends SpeakeasyBase {
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
export declare class PatientsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: PatientsPartialUpdatePathParams;
    queryParams: PatientsPartialUpdateQueryParams;
    security: PatientsPartialUpdateSecurity;
}
export declare class PatientsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
