import { SpeakeasyBase } from "../../../internal/utils";
import { FailedItemDetails } from "./faileditemdetails";
import { Finding } from "./finding";
/**
 * Success
 */
export declare class DescribeFindingsResponse extends SpeakeasyBase {
    failedItems: Record<string, FailedItemDetails>;
    findings: Finding[];
}
