import { SpeakeasyBase } from "../../../internal/utils";
import { ListKeysResponseEntry } from "./listkeysresponseentry";
/**
 * Success
 */
export declare class ListKeysResponse extends SpeakeasyBase {
    entries: ListKeysResponseEntry[];
    nextToken?: string;
}
