import { SpeakeasyBase } from "../../../internal/utils";
import { EntityPropertyReference } from "./entitypropertyreference";
import { PropertyValue } from "./propertyvalue";
/**
 * An object that specifies information about time series property values. This object is used and consumed by the <a href="https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_BatchPutPropertyValues.html">BatchPutPropertyValues</a> action.
 */
export declare class PropertyValueEntry extends SpeakeasyBase {
    entityPropertyReference: EntityPropertyReference;
    propertyValues?: PropertyValue[];
}
