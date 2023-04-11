import { SpeakeasyBase } from "../../../internal/utils";
import { SubResourceTypeEnum } from "./subresourcetypeenum";
import { SummarizedAttackVector } from "./summarizedattackvector";
import { SummarizedCounter } from "./summarizedcounter";
/**
 * The attack information for the specified SubResource.
 */
export declare class SubResourceSummary extends SpeakeasyBase {
    attackVectors?: SummarizedAttackVector[];
    counters?: SummarizedCounter[];
    id?: string;
    type?: SubResourceTypeEnum;
}
