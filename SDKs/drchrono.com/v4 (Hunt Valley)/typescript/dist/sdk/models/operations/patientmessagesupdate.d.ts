import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientMessagesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientMessagesUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientMessagesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientMessagesUpdateRequest extends SpeakeasyBase {
    pathParams: PatientMessagesUpdatePathParams;
    queryParams: PatientMessagesUpdateQueryParams;
    security: PatientMessagesUpdateSecurity;
}
export declare class PatientMessagesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
