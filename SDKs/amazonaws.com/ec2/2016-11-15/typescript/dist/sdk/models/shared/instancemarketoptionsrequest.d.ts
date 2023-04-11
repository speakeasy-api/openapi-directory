import { SpeakeasyBase } from "../../../internal/utils";
import { MarketTypeEnum } from "./markettypeenum";
import { SpotMarketOptions } from "./spotmarketoptions";
/**
 * Describes the market (purchasing) option for the instances.
 */
export declare class InstanceMarketOptionsRequest extends SpeakeasyBase {
    marketType?: MarketTypeEnum;
    spotOptions?: SpotMarketOptions;
}
