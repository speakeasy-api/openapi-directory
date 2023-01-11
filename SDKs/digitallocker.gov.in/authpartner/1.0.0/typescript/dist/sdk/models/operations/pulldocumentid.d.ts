import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullDocumentIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PullDocumentId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class PullDocumentId404ApplicationJson extends SpeakeasyBase {
    error?: any;
    errorDescription?: any;
}
export declare class PullDocumentIdRequest extends SpeakeasyBase {
    request?: any;
    security: PullDocumentIdSecurity;
}
export declare class PullDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    pullDocumentId400ApplicationJSONOneOf?: any;
    pullDocumentId401ApplicationJSONObject?: PullDocumentId401ApplicationJson;
    pullDocumentId404ApplicationJSONObject?: PullDocumentId404ApplicationJson;
    pullDocumentId500ApplicationJSONOneOf?: any;
    sample?: any;
    statusCode: number;
}
