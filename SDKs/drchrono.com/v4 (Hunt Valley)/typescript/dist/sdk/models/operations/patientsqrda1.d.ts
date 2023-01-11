import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientsQrda1PathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientsQrda1QueryParams extends SpeakeasyBase {
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
export declare class PatientsQrda1Security extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientsQrda1Request extends SpeakeasyBase {
    pathParams: PatientsQrda1PathParams;
    queryParams: PatientsQrda1QueryParams;
    security: PatientsQrda1Security;
}
export declare class PatientsQrda1Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
