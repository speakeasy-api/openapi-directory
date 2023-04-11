import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnLFTag } from "./columnlftag";
import { LFTagPair } from "./lftagpair";
/**
 * Success
 */
export declare class GetResourceLFTagsResponse extends SpeakeasyBase {
    lfTagOnDatabase?: LFTagPair[];
    lfTagsOnColumns?: ColumnLFTag[];
    lfTagsOnTable?: LFTagPair[];
}
