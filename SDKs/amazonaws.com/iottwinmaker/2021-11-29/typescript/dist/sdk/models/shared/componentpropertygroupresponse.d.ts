import { SpeakeasyBase } from "../../../internal/utils";
import { GroupTypeEnum } from "./grouptypeenum";
/**
 * The component property group response.
 */
export declare class ComponentPropertyGroupResponse extends SpeakeasyBase {
    groupType: GroupTypeEnum;
    isInherited: boolean;
    propertyNames: string[];
}
