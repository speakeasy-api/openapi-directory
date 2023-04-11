import { SpeakeasyBase } from "../../../internal/utils";
import { ProtectedResourceTypeEnum } from "./protectedresourcetypeenum";
import { ProtectionGroupAggregationEnum } from "./protectiongroupaggregationenum";
import { ProtectionGroupPatternEnum } from "./protectiongrouppatternenum";
export declare class UpdateProtectionGroupRequest extends SpeakeasyBase {
    aggregation: ProtectionGroupAggregationEnum;
    members?: string[];
    pattern: ProtectionGroupPatternEnum;
    protectionGroupId: string;
    resourceType?: ProtectedResourceTypeEnum;
}
