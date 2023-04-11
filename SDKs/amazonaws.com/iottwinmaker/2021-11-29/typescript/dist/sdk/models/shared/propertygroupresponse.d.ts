import { SpeakeasyBase } from "../../../internal/utils";
import { GroupTypeEnum } from "./grouptypeenum";
/**
 * The property group response
 */
export declare class PropertyGroupResponse extends SpeakeasyBase {
    groupType: GroupTypeEnum;
    isInherited: boolean;
    propertyNames: string[];
}
