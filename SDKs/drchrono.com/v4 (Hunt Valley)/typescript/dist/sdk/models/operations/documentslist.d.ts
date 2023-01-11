import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
    since?: string;
}
export declare class DocumentsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class DocumentsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.ScannedClinicalDocument[];
    next?: string;
    previous?: string;
}
export declare class DocumentsListRequest extends SpeakeasyBase {
    queryParams: DocumentsListQueryParams;
    security: DocumentsListSecurity;
}
export declare class DocumentsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    documentsList200ApplicationJSONObject?: DocumentsList200ApplicationJson;
}
