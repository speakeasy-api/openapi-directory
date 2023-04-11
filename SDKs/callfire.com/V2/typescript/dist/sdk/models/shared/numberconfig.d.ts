import { SpeakeasyBase } from "../../../internal/utils";
import { CallTrackingConfig } from "./calltrackingconfig";
import { IvrInboundConfig } from "./ivrinboundconfig";
import { TextInboundConfig } from "./textinboundconfig";
/**
 * A type of config. Available values: TRACKING, IVR
 */
export declare enum NumberConfigConfigTypeEnum {
    Ivr = "IVR",
    Tracking = "TRACKING"
}
/**
 * Represents the configuration of a phone number purchased by user. You can configure number to accept inbound calls, play sounds to customer, make a transfer or setup an IVR script to interact with customer. See [CallFire IVR](https://www.callfire.com/products/ivr) for more info
 */
export declare class NumberConfig extends SpeakeasyBase {
    /**
     * Call tracking configuration allows you track incoming calls, analyze, respond to customers using sms or voice replies. For more information see [call tracking page](https://www.callfire.com/products/call-tracking)
     */
    callTrackingConfig?: CallTrackingConfig;
    /**
     * A type of config. Available values: TRACKING, IVR
     */
    configType?: NumberConfigConfigTypeEnum;
    /**
     * ~
     */
    ivrInboundConfig?: IvrInboundConfig;
    /**
     * Phone number in E.164 format (11-digit). Example: 12132000384
     */
    number?: string;
    /**
     * ~
     */
    textInboundConfig?: TextInboundConfig;
}
