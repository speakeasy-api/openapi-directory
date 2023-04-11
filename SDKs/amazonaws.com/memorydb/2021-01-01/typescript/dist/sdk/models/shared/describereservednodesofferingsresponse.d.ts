import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedNodesOffering } from "./reservednodesoffering";
/**
 * Success
 */
export declare class DescribeReservedNodesOfferingsResponse extends SpeakeasyBase {
    nextToken?: string;
    reservedNodesOfferings?: ReservedNodesOffering[];
}
