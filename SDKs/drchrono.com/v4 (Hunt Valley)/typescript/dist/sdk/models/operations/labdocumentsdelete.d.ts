import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabDocumentsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LabDocumentsDeleteQueryParams extends SpeakeasyBase {
    doctor?: number;
    since?: string;
}
export declare class LabDocumentsDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabDocumentsDeleteRequest extends SpeakeasyBase {
    pathParams: LabDocumentsDeletePathParams;
    queryParams: LabDocumentsDeleteQueryParams;
    security: LabDocumentsDeleteSecurity;
}
export declare class LabDocumentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
