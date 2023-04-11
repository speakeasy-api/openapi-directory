import { SpeakeasyBase } from "../../../internal/utils";
import { ProductModel } from "./productmodel";
import { RolloutRuleComparatorEnum } from "./rolloutrulecomparatorenum";
/**
 * When the creation was successful.
 */
export declare class SegmentModel extends SpeakeasyBase {
    comparator?: RolloutRuleComparatorEnum;
    comparisonAttribute?: string;
    comparisonValue?: string;
    createdAt?: Date;
    creatorEmail?: string;
    creatorFullName?: string;
    description?: string;
    lastUpdaterEmail?: string;
    lastUpdaterFullName?: string;
    name?: string;
    product?: ProductModel;
    segmentId?: string;
    updatedAt?: Date;
}
