import { SpeakeasyBase } from "../../../internal/utils";
import { ModelInfrastructureTypeEnum } from "./modelinfrastructuretypeenum";
import { RealTimeInferenceConfig } from "./realtimeinferenceconfig";
/**
 * The configuration for the infrastructure that the model will be deployed to.
 */
export declare class ModelInfrastructureConfig extends SpeakeasyBase {
    infrastructureType: ModelInfrastructureTypeEnum;
    realTimeInferenceConfig: RealTimeInferenceConfig;
}
