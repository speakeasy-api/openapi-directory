import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabDocumentsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class LabDocumentsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    since?: string;
}
export declare class LabDocumentsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabDocumentsReadRequest extends SpeakeasyBase {
    pathParams: LabDocumentsReadPathParams;
    queryParams: LabDocumentsReadQueryParams;
    security: LabDocumentsReadSecurity;
}
export declare class LabDocumentsReadResponse extends SpeakeasyBase {
    contentType: string;
    labOrderDocument?: shared.LabOrderDocument;
    statusCode: number;
}
