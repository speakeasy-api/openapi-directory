import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedNodeExchangeStatusTypeEnum } from "./reservednodeexchangestatustypeenum";
/**
 * Reserved-node status details, such as the source reserved-node identifier, the target reserved-node identifier, the node type, the node count, and other details.
 */
export declare class ReservedNodeExchangeStatusList extends SpeakeasyBase {
    requestTime?: Date;
    reservedNodeExchangeRequestId?: string;
    sourceReservedNodeCount?: number;
    sourceReservedNodeId?: string;
    sourceReservedNodeType?: string;
    status?: ReservedNodeExchangeStatusTypeEnum;
    targetReservedNodeCount?: number;
    targetReservedNodeOfferingId?: string;
    targetReservedNodeType?: string;
}
