import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum {
    Custom = "custom",
    LetsEncrypt = "lets_encrypt"
}
export declare class CreateCertificatesRequestBodyLetSEncryptCertificateRequest extends SpeakeasyBase {
    dnsNames: string[];
    name: string;
    type?: CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum;
}
export declare enum CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum {
    Custom = "custom",
    LetsEncrypt = "lets_encrypt"
}
export declare class CreateCertificatesRequestBodyCustomCertificateRequest extends SpeakeasyBase {
    certificateChain?: string;
    leafCertificate: string;
    name: string;
    privateKey: string;
    type?: CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum;
}
export declare class CreateCertificates201ApplicationJson extends SpeakeasyBase {
    certificate?: shared.Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems;
}
export declare class CreateCertificates401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class CreateCertificatesRequest extends SpeakeasyBase {
    request: any;
}
export declare class CreateCertificatesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    createCertificates201ApplicationJSONObject?: CreateCertificates201ApplicationJson;
    createCertificates401ApplicationJSONObject?: CreateCertificates401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
