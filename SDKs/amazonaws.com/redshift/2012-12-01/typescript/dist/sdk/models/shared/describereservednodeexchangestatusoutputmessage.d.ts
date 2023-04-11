import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedNodeExchangeStatusList } from "./reservednodeexchangestatuslist";
/**
 * Success
 */
export declare class DescribeReservedNodeExchangeStatusOutputMessage extends SpeakeasyBase {
    marker?: string;
    reservedNodeExchangeStatusDetails?: ReservedNodeExchangeStatusList[];
}
