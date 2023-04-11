import { SpeakeasyBase } from "../../../internal/utils";
import { KeysAndAttributes } from "./keysandattributes";
export declare class BatchGetItemInput extends SpeakeasyBase {
    /**
     * A map of the table name and corresponding items to get by primary key. While requesting items, each table name can be invoked only once per operation.
     */
    requestItems: Record<string, KeysAndAttributes>;
}
