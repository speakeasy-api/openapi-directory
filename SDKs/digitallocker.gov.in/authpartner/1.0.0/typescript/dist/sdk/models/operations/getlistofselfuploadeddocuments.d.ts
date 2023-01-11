import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListOfSelfUploadedDocumentsSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetListOfSelfUploadedDocuments401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetListOfSelfUploadedDocuments404ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetListOfSelfUploadedDocuments500ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetListOfSelfUploadedDocumentsRequest extends SpeakeasyBase {
    security: GetListOfSelfUploadedDocumentsSecurity;
}
export declare class GetListOfSelfUploadedDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    getListOfSelfUploadedDocuments401ApplicationJSONObject?: GetListOfSelfUploadedDocuments401ApplicationJson;
    getListOfSelfUploadedDocuments404ApplicationJSONObject?: GetListOfSelfUploadedDocuments404ApplicationJson;
    getListOfSelfUploadedDocuments500ApplicationJSONObject?: GetListOfSelfUploadedDocuments500ApplicationJson;
    sample?: any;
    statusCode: number;
}
