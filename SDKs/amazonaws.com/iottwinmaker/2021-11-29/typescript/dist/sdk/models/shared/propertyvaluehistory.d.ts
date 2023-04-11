import { SpeakeasyBase } from "../../../internal/utils";
import { EntityPropertyReference } from "./entitypropertyreference";
import { PropertyValue } from "./propertyvalue";
/**
 * The history of values for a time series property.
 */
export declare class PropertyValueHistory extends SpeakeasyBase {
    entityPropertyReference: EntityPropertyReference;
    values?: PropertyValue[];
}
