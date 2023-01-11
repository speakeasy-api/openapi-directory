import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFileFromUriIdPathParams extends SpeakeasyBase {
    uri: string;
}
export declare class GetFileFromUriIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetFileFromUriId400ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetFileFromUriId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetFileFromUriId404ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetFileFromUriIdRequest extends SpeakeasyBase {
    pathParams: GetFileFromUriIdPathParams;
    security: GetFileFromUriIdSecurity;
}
export declare class GetFileFromUriIdResponse extends SpeakeasyBase {
    contentType: string;
    getFileFromURIId200ApplicationPdfString?: string;
    getFileFromURIId200ImageJpegString?: string;
    getFileFromURIId200ImageJpgString?: string;
    getFileFromURIId200ImagePngString?: string;
    getFileFromURIId400ApplicationJSONObject?: GetFileFromUriId400ApplicationJson;
    getFileFromURIId401ApplicationJSONObject?: GetFileFromUriId401ApplicationJson;
    getFileFromURIId404ApplicationJSONObject?: GetFileFromUriId404ApplicationJson;
    getFileFromURIId500ApplicationJSONOneOf?: any;
    getFileFromURIId503ApplicationJSONOneOf?: any;
    statusCode: number;
}
