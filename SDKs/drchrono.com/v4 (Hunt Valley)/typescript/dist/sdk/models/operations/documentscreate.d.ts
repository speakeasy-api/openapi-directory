import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentsCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class DocumentsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class DocumentsCreateRequest extends SpeakeasyBase {
    queryParams: DocumentsCreateQueryParams;
    security: DocumentsCreateSecurity;
}
export declare class DocumentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    scannedClinicalDocument?: shared.ScannedClinicalDocument;
    statusCode: number;
}
