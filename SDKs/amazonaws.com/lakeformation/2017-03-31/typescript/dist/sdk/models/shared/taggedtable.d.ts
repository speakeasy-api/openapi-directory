import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnLFTag } from "./columnlftag";
import { LFTagPair } from "./lftagpair";
import { TableResource } from "./tableresource";
/**
 * A structure describing a table resource with LF-tags.
 */
export declare class TaggedTable extends SpeakeasyBase {
    lfTagOnDatabase?: LFTagPair[];
    lfTagsOnColumns?: ColumnLFTag[];
    lfTagsOnTable?: LFTagPair[];
    table?: TableResource;
}
