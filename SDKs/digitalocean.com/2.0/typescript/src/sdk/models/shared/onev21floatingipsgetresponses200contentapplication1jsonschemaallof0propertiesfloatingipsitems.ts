import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems } from "./onev21dropletsgetresponses200contentapplication1jsonschemaallof0propertiesdropletsitems";



// Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion
/** 
 * The region that the floating IP is reserved to. When you query a floating IP, the entire region object will be returned.
**/
export class Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available: boolean;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features: any;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sizes" })
  sizes: any;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}


export class Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=droplet" })
  droplet?: any;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion;
}
