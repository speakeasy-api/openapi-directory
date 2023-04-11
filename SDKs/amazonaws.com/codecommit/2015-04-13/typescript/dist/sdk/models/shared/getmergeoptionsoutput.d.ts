import { SpeakeasyBase } from "../../../internal/utils";
import { MergeOptionTypeEnumEnum } from "./mergeoptiontypeenumenum";
/**
 * Success
 */
export declare class GetMergeOptionsOutput extends SpeakeasyBase {
    baseCommitId: string;
    destinationCommitId: string;
    mergeOptions: MergeOptionTypeEnumEnum[];
    sourceCommitId: string;
}
