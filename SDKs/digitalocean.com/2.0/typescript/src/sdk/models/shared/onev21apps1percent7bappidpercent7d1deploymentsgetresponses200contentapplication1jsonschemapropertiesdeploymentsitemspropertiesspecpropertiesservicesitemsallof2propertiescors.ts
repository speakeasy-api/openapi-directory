import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCorsAllowOrigins extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exact" })
  exact?: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=regex" })
  regex?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_credentials" })
  allowCredentials?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_headers" })
  allowHeaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=allow_methods" })
  allowMethods?: string[];

  @SpeakeasyMetadata({ data: "json, name=allow_origins", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCorsAllowOrigins })
  allowOrigins?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCorsAllowOrigins[];

  @SpeakeasyMetadata({ data: "json, name=expose_headers" })
  exposeHeaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=max_age" })
  maxAge?: string;
}
