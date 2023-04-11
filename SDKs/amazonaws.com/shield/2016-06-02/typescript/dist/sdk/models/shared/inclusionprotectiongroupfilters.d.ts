import { SpeakeasyBase } from "../../../internal/utils";
import { ProtectedResourceTypeEnum } from "./protectedresourcetypeenum";
import { ProtectionGroupAggregationEnum } from "./protectiongroupaggregationenum";
import { ProtectionGroupPatternEnum } from "./protectiongrouppatternenum";
/**
 * Narrows the set of protection groups that the call retrieves. You can retrieve a single protection group by its name and you can retrieve all protection groups that are configured with a specific pattern, aggregation, or resource type. You can provide up to one criteria per filter type. Shield Advanced returns the protection groups that exactly match all of the search criteria that you provide.
 */
export declare class InclusionProtectionGroupFilters extends SpeakeasyBase {
    aggregations?: ProtectionGroupAggregationEnum[];
    patterns?: ProtectionGroupPatternEnum[];
    protectionGroupIds?: string[];
    resourceTypes?: ProtectedResourceTypeEnum[];
}
