import { SpeakeasyBase } from "../../../internal/utils";
import { TypedAttributeValue } from "./typedattributevalue";
import { UpdateActionTypeEnum } from "./updateactiontypeenum";
/**
 * The action to take on a typed link attribute value. Updates are only supported for attributes which don’t contribute to link identity.
 */
export declare class LinkAttributeAction extends SpeakeasyBase {
    attributeActionType?: UpdateActionTypeEnum;
    attributeUpdateValue?: TypedAttributeValue;
}
