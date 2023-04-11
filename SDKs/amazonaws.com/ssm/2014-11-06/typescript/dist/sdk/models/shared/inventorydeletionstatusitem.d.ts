import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryDeletionStatusEnum } from "./inventorydeletionstatusenum";
import { InventoryDeletionSummary } from "./inventorydeletionsummary";
/**
 * Status information returned by the <code>DeleteInventory</code> operation.
 */
export declare class InventoryDeletionStatusItem extends SpeakeasyBase {
    deletionId?: string;
    deletionStartTime?: Date;
    deletionSummary?: InventoryDeletionSummary;
    lastStatus?: InventoryDeletionStatusEnum;
    lastStatusMessage?: string;
    lastStatusUpdateTime?: Date;
    typeName?: string;
}
