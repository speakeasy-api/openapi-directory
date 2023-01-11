import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabDocumentsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    since?: string;
}
export declare class LabDocumentsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class LabDocumentsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.LabOrderDocument[];
    next?: string;
    previous?: string;
}
export declare class LabDocumentsListRequest extends SpeakeasyBase {
    queryParams: LabDocumentsListQueryParams;
    security: LabDocumentsListSecurity;
}
export declare class LabDocumentsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    labDocumentsList200ApplicationJSONObject?: LabDocumentsList200ApplicationJson;
}
