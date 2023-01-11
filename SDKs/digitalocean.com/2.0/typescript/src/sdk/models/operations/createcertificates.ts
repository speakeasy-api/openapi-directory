import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum {
    Custom = "custom",
    LetsEncrypt = "lets_encrypt"
}


export class CreateCertificatesRequestBodyLetSEncryptCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_names" })
  dnsNames: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum;
}

export enum CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum {
    Custom = "custom",
    LetsEncrypt = "lets_encrypt"
}


export class CreateCertificatesRequestBodyCustomCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate_chain" })
  certificateChain?: string;

  @SpeakeasyMetadata({ data: "json, name=leaf_certificate" })
  leafCertificate: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=private_key" })
  privateKey: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum;
}


export class CreateCertificates201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate?: shared.Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems;
}


export class CreateCertificates401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateCertificatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CreateCertificatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createCertificates201ApplicationJSONObject?: CreateCertificates201ApplicationJson;

  @SpeakeasyMetadata()
  createCertificates401ApplicationJSONObject?: CreateCertificates401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
