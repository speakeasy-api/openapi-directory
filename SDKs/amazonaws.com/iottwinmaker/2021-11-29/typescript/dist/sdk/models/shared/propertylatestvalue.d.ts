import { SpeakeasyBase } from "../../../internal/utils";
import { DataValue } from "./datavalue";
import { EntityPropertyReference } from "./entitypropertyreference";
/**
 * The latest value of the property.
 */
export declare class PropertyLatestValue extends SpeakeasyBase {
    propertyReference: EntityPropertyReference;
    propertyValue?: DataValue;
}
