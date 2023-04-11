import { SpeakeasyBase } from "../../../internal/utils";
import { JobComparatorEnum } from "./jobcomparatorenum";
import { TagTargetEnum } from "./tagtargetenum";
import { TagValuePair } from "./tagvaluepair";
/**
 * Specifies a tag-based condition that determines whether an S3 object is included or excluded from a classification job.
 */
export declare class TagScopeTerm extends SpeakeasyBase {
    comparator?: JobComparatorEnum;
    key?: string;
    tagValues?: TagValuePair[];
    target?: TagTargetEnum;
}
