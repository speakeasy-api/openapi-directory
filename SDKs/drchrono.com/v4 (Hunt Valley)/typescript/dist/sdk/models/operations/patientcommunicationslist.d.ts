import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientCommunicationsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
}
export declare class PatientCommunicationsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class PatientCommunicationsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.PatientCommunication[];
    next?: string;
    previous?: string;
}
export declare class PatientCommunicationsListRequest extends SpeakeasyBase {
    queryParams: PatientCommunicationsListQueryParams;
    security: PatientCommunicationsListSecurity;
}
export declare class PatientCommunicationsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patientCommunicationsList200ApplicationJSONObject?: PatientCommunicationsList200ApplicationJson;
}
