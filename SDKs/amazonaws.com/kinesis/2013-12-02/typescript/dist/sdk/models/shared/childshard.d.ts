import { SpeakeasyBase } from "../../../internal/utils";
import { HashKeyRange } from "./hashkeyrange";
/**
 * Output parameter of the GetRecords API. The existing child shard of the current shard.
 */
export declare class ChildShard extends SpeakeasyBase {
    /**
     * The range of possible hash key values for the shard, which is a set of ordered contiguous positive integers.
     */
    hashKeyRange: HashKeyRange;
    parentShards: string[];
    shardId: string;
}
