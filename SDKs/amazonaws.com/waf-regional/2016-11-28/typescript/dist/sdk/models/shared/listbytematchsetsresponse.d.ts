import { SpeakeasyBase } from "../../../internal/utils";
import { ByteMatchSetSummary } from "./bytematchsetsummary";
/**
 * Success
 */
export declare class ListByteMatchSetsResponse extends SpeakeasyBase {
    byteMatchSets?: ByteMatchSetSummary[];
    nextMarker?: string;
}
