import { SpeakeasyBase } from "../../../internal/utils";
import { PredictiveDialerConfig } from "./predictivedialerconfig";
import { ProgressiveDialerConfig } from "./progressivedialerconfig";
/**
 * The possible types of dialer config parameters
 */
export declare class DialerConfig extends SpeakeasyBase {
    /**
     * Predictive Dialer config
     */
    predictiveDialerConfig?: PredictiveDialerConfig;
    /**
     * Progressive Dialer config
     */
    progressiveDialerConfig?: ProgressiveDialerConfig;
}
