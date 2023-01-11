import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DocumentsUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class DocumentsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class DocumentsUpdateRequest extends SpeakeasyBase {
    pathParams: DocumentsUpdatePathParams;
    queryParams: DocumentsUpdateQueryParams;
    security: DocumentsUpdateSecurity;
}
export declare class DocumentsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
