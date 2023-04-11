import { SpeakeasyBase } from "../../../internal/utils";
import { FailedItemDetails } from "./faileditemdetails";
/**
 * Success
 */
export declare class AddAttributesToFindingsResponse extends SpeakeasyBase {
    failedItems: Record<string, FailedItemDetails>;
}
