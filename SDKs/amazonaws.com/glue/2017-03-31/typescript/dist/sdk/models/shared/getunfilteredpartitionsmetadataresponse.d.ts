import { SpeakeasyBase } from "../../../internal/utils";
import { UnfilteredPartition } from "./unfilteredpartition";
/**
 * Success
 */
export declare class GetUnfilteredPartitionsMetadataResponse extends SpeakeasyBase {
    nextToken?: string;
    unfilteredPartitions?: UnfilteredPartition[];
}
