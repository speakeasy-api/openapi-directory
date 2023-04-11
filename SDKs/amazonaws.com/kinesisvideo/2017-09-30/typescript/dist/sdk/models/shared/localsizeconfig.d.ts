import { SpeakeasyBase } from "../../../internal/utils";
import { StrategyOnFullSizeEnum } from "./strategyonfullsizeenum";
/**
 * The configuration details that include the maximum size of the media (<code>MaxLocalMediaSizeInMB</code>) that you want to store for a stream on the Edge Agent, as well as the strategy that should be used (<code>StrategyOnFullSize</code>) when a stream's maximum size has been reached.
 */
export declare class LocalSizeConfig extends SpeakeasyBase {
    maxLocalMediaSizeInMB?: number;
    strategyOnFullSize?: StrategyOnFullSizeEnum;
}
