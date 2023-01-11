import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientsOnpatientAccessDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientsOnpatientAccessDeleteQueryParams extends SpeakeasyBase {
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
export declare class PatientsOnpatientAccessDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientsOnpatientAccessDeleteRequest extends SpeakeasyBase {
    pathParams: PatientsOnpatientAccessDeletePathParams;
    queryParams: PatientsOnpatientAccessDeleteQueryParams;
    security: PatientsOnpatientAccessDeleteSecurity;
}
export declare class PatientsOnpatientAccessDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
