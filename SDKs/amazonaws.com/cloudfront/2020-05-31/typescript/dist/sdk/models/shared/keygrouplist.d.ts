import { SpeakeasyBase } from "../../../internal/utils";
import { KeyGroupSummaryList } from "./keygroupsummarylist";
/**
 * A list of key groups.
 */
export declare class KeyGroupList extends SpeakeasyBase {
    items?: KeyGroupSummaryList[];
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
