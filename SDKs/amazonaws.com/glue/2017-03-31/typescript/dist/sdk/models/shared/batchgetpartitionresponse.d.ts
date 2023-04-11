import { SpeakeasyBase } from "../../../internal/utils";
import { Partition } from "./partition";
import { PartitionValueList } from "./partitionvaluelist";
/**
 * Success
 */
export declare class BatchGetPartitionResponse extends SpeakeasyBase {
    partitions?: Partition[];
    unprocessedKeys?: PartitionValueList[];
}
