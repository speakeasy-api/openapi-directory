import { SpeakeasyBase } from "../../../internal/utils";
import { Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum } from "./onev21dropletsgetresponses200contentapplication1jsonschemaallof0propertiesdropletsitemspropertiesimagepropertiesregionsitemsenum";
export declare enum Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1TypeEnum {
    Attach = "attach",
    Detach = "detach",
    Resize = "resize"
}
export declare class Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1 extends SpeakeasyBase {
    dropletId: number;
    region?: Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;
    type: Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf1TypeEnum;
}
