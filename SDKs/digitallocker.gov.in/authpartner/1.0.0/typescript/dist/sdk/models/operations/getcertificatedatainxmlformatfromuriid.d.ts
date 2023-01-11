import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCertificateDataInXmlFormatFromUriIdPathParams extends SpeakeasyBase {
    uri: string;
}
export declare class GetCertificateDataInXmlFormatFromUriIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetCertificateDataInXmlFormatFromUriId400ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetCertificateDataInXmlFormatFromUriId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetCertificateDataInXmlFormatFromUriId404ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetCertificateDataInXmlFormatFromUriIdRequest extends SpeakeasyBase {
    pathParams: GetCertificateDataInXmlFormatFromUriIdPathParams;
    security: GetCertificateDataInXmlFormatFromUriIdSecurity;
}
export declare class GetCertificateDataInXmlFormatFromUriIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getCertificateDataInXMLFormatFromURIId400ApplicationJSONObject?: GetCertificateDataInXmlFormatFromUriId400ApplicationJson;
    getCertificateDataInXMLFormatFromURIId401ApplicationJSONObject?: GetCertificateDataInXmlFormatFromUriId401ApplicationJson;
    getCertificateDataInXMLFormatFromURIId404ApplicationJSONObject?: GetCertificateDataInXmlFormatFromUriId404ApplicationJson;
    getCertificateDataInXMLFormatFromURIId500ApplicationJSONOneOf?: any;
    getCertificateDataInXMLFormatFromURIId503ApplicationJSONOneOf?: any;
    statusCode: number;
}
