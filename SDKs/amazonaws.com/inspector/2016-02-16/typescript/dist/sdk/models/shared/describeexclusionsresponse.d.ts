import { SpeakeasyBase } from "../../../internal/utils";
import { Exclusion } from "./exclusion";
import { FailedItemDetails } from "./faileditemdetails";
/**
 * Success
 */
export declare class DescribeExclusionsResponse extends SpeakeasyBase {
    exclusions: Record<string, Exclusion>;
    failedItems: Record<string, FailedItemDetails>;
}
