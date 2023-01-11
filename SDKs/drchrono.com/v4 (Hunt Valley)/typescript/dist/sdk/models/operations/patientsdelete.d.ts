import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientsDeleteQueryParams extends SpeakeasyBase {
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
export declare class PatientsDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientsDeleteRequest extends SpeakeasyBase {
    pathParams: PatientsDeletePathParams;
    queryParams: PatientsDeleteQueryParams;
    security: PatientsDeleteSecurity;
}
export declare class PatientsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
