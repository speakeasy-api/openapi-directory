import { SpeakeasyBase } from "../../../internal/utils";
import { PoolInformation } from "./poolinformation";
/**
 * Success
 */
export declare class DescribePoolsResult extends SpeakeasyBase {
    nextToken?: string;
    pools?: PoolInformation[];
}
