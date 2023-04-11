import { SpeakeasyBase } from "../../../internal/utils";
import { StreamKeySummary } from "./streamkeysummary";
/**
 * Success
 */
export declare class ListStreamKeysResponse extends SpeakeasyBase {
    nextToken?: string;
    streamKeys: StreamKeySummary[];
}
