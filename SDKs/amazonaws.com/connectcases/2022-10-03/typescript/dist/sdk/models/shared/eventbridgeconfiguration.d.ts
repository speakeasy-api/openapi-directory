import { SpeakeasyBase } from "../../../internal/utils";
import { EventIncludedData } from "./eventincludeddata";
/**
 * Configuration to enable EventBridge case event delivery and determine what data is delivered.
 */
export declare class EventBridgeConfiguration extends SpeakeasyBase {
    enabled: boolean;
    includedData?: EventIncludedData;
}
