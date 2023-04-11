import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
/**
 * The infrastructure configuration for deploying the model to a real-time inference endpoint.
 */
export declare class RealTimeInferenceConfig extends SpeakeasyBase {
    instanceCount: number;
    instanceType: InstanceTypeEnum;
}
