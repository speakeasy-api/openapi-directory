import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsStateEnum {
    Pending = "pending",
    Verified = "verified",
    Error = "error"
}

export enum Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsTypeEnum {
    Custom = "custom",
    LetsEncrypt = "lets_encrypt"
}


export class Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=dns_names" })
  dnsNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=not_after" })
  notAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=sha1_fingerprint" })
  sha1Fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsTypeEnum;
}
