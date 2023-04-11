import { SpeakeasyBase } from "../../../internal/utils";
import { KeyListEntry } from "./keylistentry";
/**
 * Success
 */
export declare class ListKeysResponse extends SpeakeasyBase {
    keys?: KeyListEntry[];
    nextMarker?: string;
    truncated?: boolean;
}
