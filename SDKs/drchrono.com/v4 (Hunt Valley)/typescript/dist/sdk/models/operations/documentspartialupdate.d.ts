import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DocumentsPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class DocumentsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class DocumentsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DocumentsPartialUpdatePathParams;
    queryParams: DocumentsPartialUpdateQueryParams;
    security: DocumentsPartialUpdateSecurity;
}
export declare class DocumentsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
