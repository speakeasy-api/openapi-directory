import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information collected from managed nodes based on your inventory policy document
 */
export declare class InventoryItem extends SpeakeasyBase {
    captureTime: string;
    content?: Record<string, string>[];
    contentHash?: string;
    context?: Record<string, string>;
    schemaVersion: string;
    typeName: string;
}
