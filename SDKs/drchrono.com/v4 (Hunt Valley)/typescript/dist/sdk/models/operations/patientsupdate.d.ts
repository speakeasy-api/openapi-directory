import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientsUpdateQueryParams extends SpeakeasyBase {
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
export declare class PatientsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientsUpdateRequest extends SpeakeasyBase {
    pathParams: PatientsUpdatePathParams;
    queryParams: PatientsUpdateQueryParams;
    security: PatientsUpdateSecurity;
}
export declare class PatientsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
