import { SpeakeasyBase } from "../../../internal/utils";
export declare enum Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsStateEnum {
    Pending = "pending",
    Verified = "verified",
    Error = "error"
}
export declare enum Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsTypeEnum {
    Custom = "custom",
    LetsEncrypt = "lets_encrypt"
}
export declare class Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems extends SpeakeasyBase {
    createdAt?: Date;
    dnsNames?: string[];
    id?: string;
    name?: string;
    notAfter?: Date;
    sha1Fingerprint?: string;
    state?: Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsStateEnum;
    type?: Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsTypeEnum;
}
