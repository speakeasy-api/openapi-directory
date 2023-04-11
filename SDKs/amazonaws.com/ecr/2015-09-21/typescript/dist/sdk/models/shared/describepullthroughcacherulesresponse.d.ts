import { SpeakeasyBase } from "../../../internal/utils";
import { PullThroughCacheRule } from "./pullthroughcacherule";
/**
 * Success
 */
export declare class DescribePullThroughCacheRulesResponse extends SpeakeasyBase {
    nextToken?: string;
    pullThroughCacheRules?: PullThroughCacheRule[];
}
