import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesDistributionEnum } from "./onev21dropletsgetresponses200contentapplication1jsonschemaallof0propertiesdropletsitemspropertiesimagepropertiesdistributionenum";



export class Onev21imagesPostRequestBodyContentApplication1jsonSchemaAllOf0 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=distribution" })
  distribution?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesDistributionEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
