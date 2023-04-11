import { SpeakeasyBase } from "../../../internal/utils";
import { FailedItemReasonEnum } from "./faileditemreasonenum";
/**
 * Details of a resource that failed when trying to update it's association to a resource set.
 */
export declare class FailedItem extends SpeakeasyBase {
    reason?: FailedItemReasonEnum;
    uri?: string;
}
