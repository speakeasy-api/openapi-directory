import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedNode } from "./reservednode";
/**
 * Success
 */
export declare class DescribeReservedNodesResponse extends SpeakeasyBase {
    nextToken?: string;
    reservedNodes?: ReservedNode[];
}
