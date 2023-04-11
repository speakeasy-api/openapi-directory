import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateSpotMarketOptionsRequest } from "./launchtemplatespotmarketoptionsrequest";
import { MarketTypeEnum } from "./markettypeenum";
/**
 * The market (purchasing) option for the instances.
 */
export declare class LaunchTemplateInstanceMarketOptionsRequest extends SpeakeasyBase {
    marketType?: MarketTypeEnum;
    spotOptions?: LaunchTemplateSpotMarketOptionsRequest;
}
