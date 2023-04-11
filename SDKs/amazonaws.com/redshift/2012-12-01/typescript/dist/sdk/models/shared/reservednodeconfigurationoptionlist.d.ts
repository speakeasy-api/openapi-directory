import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedNode } from "./reservednode";
import { ReservedNodeOffering } from "./reservednodeoffering";
/**
 * Details for a reserved-node exchange. Examples include the node type for a reserved node, the price for a node, the node's state, and other details.
 */
export declare class ReservedNodeConfigurationOptionList extends SpeakeasyBase {
    /**
     * Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings.
     */
    sourceReservedNode?: ReservedNode;
    targetReservedNodeCount?: number;
    /**
     * Describes a reserved node offering.
     */
    targetReservedNodeOffering?: ReservedNodeOffering;
}
