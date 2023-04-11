import { SpeakeasyBase } from "../../../internal/utils";
import { ChildBlock } from "./childblock";
/**
 * A reference to a block.
 */
export declare class BlockReference extends SpeakeasyBase {
    beginOffset?: number;
    blockId?: string;
    childBlocks?: ChildBlock[];
    endOffset?: number;
}
