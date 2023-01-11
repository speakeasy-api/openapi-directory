import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum } from "./onev21dropletsgetresponses200contentapplication1jsonschemaallof0propertiesdropletsitemspropertiesimagepropertiesregionsitemsenum";


export enum Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1TypeEnum {
    Attach = "attach",
    Detach = "detach",
    Resize = "resize"
}


export class Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=droplet_id" })
  dropletId: number;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1TypeEnum;
}
