import { SpeakeasyBase } from "../../../internal/utils";
import { GroupTypeEnum } from "./grouptypeenum";
import { PropertyGroupUpdateTypeEnum } from "./propertygroupupdatetypeenum";
/**
 * The component property group request.
 */
export declare class ComponentPropertyGroupRequest extends SpeakeasyBase {
    groupType?: GroupTypeEnum;
    propertyNames?: string[];
    updateType?: PropertyGroupUpdateTypeEnum;
}
