import { SpeakeasyBase } from "../../../internal/utils";
import { IPSetSummary } from "./ipsetsummary";
/**
 * Success
 */
export declare class ListIPSetsResponse extends SpeakeasyBase {
    ipSets?: IPSetSummary[];
    nextMarker?: string;
}
