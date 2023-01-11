import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientMessagesListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
    since?: string;
}
export declare class PatientMessagesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class PatientMessagesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.PatientMessage[];
    next?: string;
    previous?: string;
}
export declare class PatientMessagesListRequest extends SpeakeasyBase {
    queryParams: PatientMessagesListQueryParams;
    security: PatientMessagesListSecurity;
}
export declare class PatientMessagesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patientMessagesList200ApplicationJSONObject?: PatientMessagesList200ApplicationJson;
}
