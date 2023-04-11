import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The inventory result item.
 */
export declare class InventoryResultItem extends SpeakeasyBase {
    captureTime?: string;
    content: Record<string, string>[];
    contentHash?: string;
    schemaVersion: string;
    typeName: string;
}
