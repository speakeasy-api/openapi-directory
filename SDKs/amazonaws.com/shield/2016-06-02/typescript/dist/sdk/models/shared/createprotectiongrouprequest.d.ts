import { SpeakeasyBase } from "../../../internal/utils";
import { ProtectedResourceTypeEnum } from "./protectedresourcetypeenum";
import { ProtectionGroupAggregationEnum } from "./protectiongroupaggregationenum";
import { ProtectionGroupPatternEnum } from "./protectiongrouppatternenum";
import { Tag } from "./tag";
export declare class CreateProtectionGroupRequest extends SpeakeasyBase {
    aggregation: ProtectionGroupAggregationEnum;
    members?: string[];
    pattern: ProtectionGroupPatternEnum;
    protectionGroupId: string;
    resourceType?: ProtectedResourceTypeEnum;
    tags?: Tag[];
}
