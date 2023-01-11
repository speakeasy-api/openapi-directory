import { SpeakeasyBase } from "../../../internal/utils";
import { KeysAndAttributes } from "./keysandattributes";
export declare class BatchGetItemInput extends SpeakeasyBase {
    requestItems: Record<string, KeysAndAttributes>;
}
