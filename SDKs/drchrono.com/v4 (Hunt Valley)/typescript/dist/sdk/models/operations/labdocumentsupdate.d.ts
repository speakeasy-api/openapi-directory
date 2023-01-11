import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabDocumentsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LabDocumentsUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    since?: string;
}
export declare class LabDocumentsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabDocumentsUpdateRequest extends SpeakeasyBase {
    pathParams: LabDocumentsUpdatePathParams;
    queryParams: LabDocumentsUpdateQueryParams;
    security: LabDocumentsUpdateSecurity;
}
export declare class LabDocumentsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
