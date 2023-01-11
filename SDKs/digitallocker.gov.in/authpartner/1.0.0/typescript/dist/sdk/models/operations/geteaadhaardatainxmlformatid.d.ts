import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEAadhaarDataInXmlFormatIdSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetEAadhaarDataInXmlFormatId401ApplicationJson extends SpeakeasyBase {
    error?: string;
    errorDescription?: string;
}
export declare class GetEAadhaarDataInXmlFormatId404ApplicationJson extends SpeakeasyBase {
    error?: any;
    errorDescription?: any;
}
export declare class GetEAadhaarDataInXmlFormatIdRequest extends SpeakeasyBase {
    security: GetEAadhaarDataInXmlFormatIdSecurity;
}
export declare class GetEAadhaarDataInXmlFormatIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getEAadhaarDataInXMLFormatId401ApplicationJSONObject?: GetEAadhaarDataInXmlFormatId401ApplicationJson;
    getEAadhaarDataInXMLFormatId404ApplicationJSONObject?: GetEAadhaarDataInXmlFormatId404ApplicationJson;
    getEAadhaarDataInXMLFormatId500ApplicationJSONOneOf?: any;
    getEAadhaarDataInXMLFormatId503ApplicationJSONOneOf?: any;
    statusCode: number;
}
