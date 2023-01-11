import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListOfDocumentsProvidedByAnIssuerIdSecurity extends SpeakeasyBase {
    oauthsecurity: shared.SchemeOauthsecurity;
}
export declare class GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson extends SpeakeasyBase {
    error?: any;
    errorDescription?: any;
}
export declare class GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson extends SpeakeasyBase {
    error?: any;
    errorDescription?: any;
}
export declare class GetListOfDocumentsProvidedByAnIssuerIdRequest extends SpeakeasyBase {
    request?: any;
    security: GetListOfDocumentsProvidedByAnIssuerIdSecurity;
}
export declare class GetListOfDocumentsProvidedByAnIssuerIdResponse extends SpeakeasyBase {
    contentType: string;
    docTypeResponse?: shared.DocTypeResponse;
    getListOfDocumentsProvidedByAnIssuerId400ApplicationJSONObject?: GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson;
    getListOfDocumentsProvidedByAnIssuerId401ApplicationJSONObject?: GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson;
    getListOfDocumentsProvidedByAnIssuerId500ApplicationJSONObject?: GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson;
    statusCode: number;
}
