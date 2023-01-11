import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabDocumentsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LabDocumentsPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    since?: string;
}
export declare class LabDocumentsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabDocumentsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: LabDocumentsPartialUpdatePathParams;
    queryParams: LabDocumentsPartialUpdateQueryParams;
    security: LabDocumentsPartialUpdateSecurity;
}
export declare class LabDocumentsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
