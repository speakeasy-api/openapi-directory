import { SpeakeasyBase } from "../../../internal/utils";
import { CachePolicySummaryList } from "./cachepolicysummarylist";
/**
 * A list of cache policies.
 */
export declare class CachePolicyList extends SpeakeasyBase {
    items?: CachePolicySummaryList[];
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
