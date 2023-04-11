import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedCacheNodeList } from "./reservedcachenodelist";
/**
 * Represents the output of a <code>DescribeReservedCacheNodes</code> operation.
 */
export declare class ReservedCacheNodeMessage extends SpeakeasyBase {
    marker?: string;
    reservedCacheNodes?: ReservedCacheNodeList[];
}
