import { SpeakeasyBase } from "../../../internal/utils";
import { LFTagPair } from "./lftagpair";
/**
 * A structure containing the name of a column resource and the LF-tags attached to it.
 */
export declare class ColumnLFTag extends SpeakeasyBase {
    lfTags?: LFTagPair[];
    name?: string;
}
