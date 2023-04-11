import { SpeakeasyBase } from "../../../internal/utils";
import { DataValue } from "./datavalue";
import { PropertyDefinitionRequest } from "./propertydefinitionrequest";
import { PropertyUpdateTypeEnum } from "./propertyupdatetypeenum";
/**
 * An object that sets information about a property.
 */
export declare class PropertyRequest extends SpeakeasyBase {
    definition?: PropertyDefinitionRequest;
    updateType?: PropertyUpdateTypeEnum;
    value?: DataValue;
}
