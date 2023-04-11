import { SpeakeasyBase } from "../../../internal/utils";
import { BlockReference } from "./blockreference";
import { EntityTypeEnum } from "./entitytypeenum";
/**
 * <p>Provides information about an entity. </p> <p> </p>
 */
export declare class Entity extends SpeakeasyBase {
    beginOffset?: number;
    blockReferences?: BlockReference[];
    endOffset?: number;
    score?: number;
    text?: string;
    type?: EntityTypeEnum;
}
