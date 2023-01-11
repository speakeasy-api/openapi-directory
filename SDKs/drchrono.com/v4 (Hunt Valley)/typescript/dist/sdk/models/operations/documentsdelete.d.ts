import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DocumentsDeleteQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class DocumentsDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class DocumentsDeleteRequest extends SpeakeasyBase {
    pathParams: DocumentsDeletePathParams;
    queryParams: DocumentsDeleteQueryParams;
    security: DocumentsDeleteSecurity;
}
export declare class DocumentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
