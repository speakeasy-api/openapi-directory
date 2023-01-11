import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCertificatePathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class GetCertificate200ApplicationJson extends SpeakeasyBase {
    certificate?: shared.Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems;
}
export declare class GetCertificate401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetCertificateRequest extends SpeakeasyBase {
    pathParams: GetCertificatePathParams;
}
export declare class GetCertificateResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getCertificate200ApplicationJSONObject?: GetCertificate200ApplicationJson;
    getCertificate401ApplicationJSONObject?: GetCertificate401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
