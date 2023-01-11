import { SpeakeasyBase } from "../../../internal/utils";
import { CostTypeEnum } from "./costtypeenum";
/**
 * Indicate the default configuration of the cost on this channel.
**/
export declare class ChannelCostSettings extends SpeakeasyBase {
    costType: CostTypeEnum;
    globalCostValue?: number;
}
