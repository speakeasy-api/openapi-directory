import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabDocumentsCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
    since?: string;
}
export declare class LabDocumentsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabDocumentsCreateRequest extends SpeakeasyBase {
    queryParams: LabDocumentsCreateQueryParams;
    security: LabDocumentsCreateSecurity;
}
export declare class LabDocumentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    labOrderDocument?: shared.LabOrderDocument;
    statusCode: number;
}
