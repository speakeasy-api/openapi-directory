import { SpeakeasyBase } from "../../../internal/utils";
import { ShardFilterTypeEnum } from "./shardfiltertypeenum";
/**
 * The request parameter used to filter out the response of the <code>ListShards</code> API.
 */
export declare class ShardFilter extends SpeakeasyBase {
    shardId?: string;
    timestamp?: Date;
    type: ShardFilterTypeEnum;
}
