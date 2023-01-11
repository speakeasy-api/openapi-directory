import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientsCcdaPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientsCcdaQueryParams extends SpeakeasyBase {
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
export declare class PatientsCcdaSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientsCcdaRequest extends SpeakeasyBase {
    pathParams: PatientsCcdaPathParams;
    queryParams: PatientsCcdaQueryParams;
    security: PatientsCcdaSecurity;
}
export declare class PatientsCcdaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
