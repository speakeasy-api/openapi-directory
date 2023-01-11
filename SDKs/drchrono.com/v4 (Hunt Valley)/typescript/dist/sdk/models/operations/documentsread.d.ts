import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DocumentsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class DocumentsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class DocumentsReadRequest extends SpeakeasyBase {
    pathParams: DocumentsReadPathParams;
    queryParams: DocumentsReadQueryParams;
    security: DocumentsReadSecurity;
}
export declare class DocumentsReadResponse extends SpeakeasyBase {
    contentType: string;
    scannedClinicalDocument?: shared.ScannedClinicalDocument;
    statusCode: number;
}
