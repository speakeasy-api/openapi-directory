import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrescriptionMessagesListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    parentMessage?: number;
    patient?: number;
    since?: string;
}
export declare class PrescriptionMessagesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class PrescriptionMessagesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.PrescriptionMessage[];
    next?: string;
    previous?: string;
}
export declare class PrescriptionMessagesListRequest extends SpeakeasyBase {
    queryParams: PrescriptionMessagesListQueryParams;
    security: PrescriptionMessagesListSecurity;
}
export declare class PrescriptionMessagesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    prescriptionMessagesList200ApplicationJSONObject?: PrescriptionMessagesList200ApplicationJson;
}
