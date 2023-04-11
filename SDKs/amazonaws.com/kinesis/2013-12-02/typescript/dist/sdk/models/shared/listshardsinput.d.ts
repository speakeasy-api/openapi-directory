import { SpeakeasyBase } from "../../../internal/utils";
import { ShardFilter } from "./shardfilter";
export declare class ListShardsInput extends SpeakeasyBase {
    exclusiveStartShardId?: string;
    maxResults?: number;
    nextToken?: string;
    shardFilter?: ShardFilter;
    streamARN?: string;
    streamCreationTimestamp?: Date;
    streamName?: string;
}
