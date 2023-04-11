import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The parameters for using an EventBridge event bus as a target.
 */
export declare class PipeTargetEventBridgeEventBusParameters extends SpeakeasyBase {
    detailType?: string;
    endpointId?: string;
    resources?: string[];
    source?: string;
    time?: string;
}
