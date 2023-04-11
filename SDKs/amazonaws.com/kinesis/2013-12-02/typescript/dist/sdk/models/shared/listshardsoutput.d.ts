import { SpeakeasyBase } from "../../../internal/utils";
import { Shard } from "./shard";
/**
 * Success
 */
export declare class ListShardsOutput extends SpeakeasyBase {
    nextToken?: string;
    shards?: Shard[];
}
