import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItemsTypeEnum {
    Unspecified = "UNSPECIFIED",
    Default = "DEFAULT",
    Primary = "PRIMARY",
    Alias = "ALIAS"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItemsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=wildcard" })
  wildcard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
