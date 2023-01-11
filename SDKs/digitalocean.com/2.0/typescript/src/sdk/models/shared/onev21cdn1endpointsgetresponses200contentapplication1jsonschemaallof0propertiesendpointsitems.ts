import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Onev21cdn1endpointsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesEndpointsItemsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate_id" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_domain" })
  customDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}
