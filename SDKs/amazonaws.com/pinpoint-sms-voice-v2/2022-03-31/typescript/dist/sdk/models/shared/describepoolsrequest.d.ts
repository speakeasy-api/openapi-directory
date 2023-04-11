import { SpeakeasyBase } from "../../../internal/utils";
import { PoolFilter } from "./poolfilter";
export declare class DescribePoolsRequest extends SpeakeasyBase {
    filters?: PoolFilter[];
    maxResults?: number;
    nextToken?: string;
    poolIds?: string[];
}
