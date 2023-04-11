import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryDeletionStatusItem } from "./inventorydeletionstatusitem";
/**
 * Success
 */
export declare class DescribeInventoryDeletionsResult extends SpeakeasyBase {
    inventoryDeletions?: InventoryDeletionStatusItem[];
    nextToken?: string;
}
