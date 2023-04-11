import { SpeakeasyBase } from "../../../internal/utils";
import { TypedAttributeValue } from "./typedattributevalue";
import { UpdateActionTypeEnum } from "./updateactiontypeenum";
/**
 * The action to take on the object attribute.
 */
export declare class ObjectAttributeAction extends SpeakeasyBase {
    objectAttributeActionType?: UpdateActionTypeEnum;
    objectAttributeUpdateValue?: TypedAttributeValue;
}
