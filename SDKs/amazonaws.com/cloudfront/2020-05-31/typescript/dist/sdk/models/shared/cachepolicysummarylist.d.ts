import { SpeakeasyBase } from "../../../internal/utils";
import { CachePolicy } from "./cachepolicy";
import { CachePolicyTypeEnum } from "./cachepolicytypeenum";
/**
 * Contains a cache policy.
 */
export declare class CachePolicySummaryList extends SpeakeasyBase {
    cachePolicy: CachePolicy;
    type: CachePolicyTypeEnum;
}
