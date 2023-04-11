import { SpeakeasyBase } from "../../../internal/utils";
import { ProfilerConfigForUpdate } from "./profilerconfigforupdate";
import { ProfilerRuleConfiguration } from "./profilerruleconfiguration";
import { ResourceConfigForUpdate } from "./resourceconfigforupdate";
export declare class UpdateTrainingJobRequest extends SpeakeasyBase {
    profilerConfig?: ProfilerConfigForUpdate;
    profilerRuleConfigurations?: ProfilerRuleConfiguration[];
    resourceConfig?: ResourceConfigForUpdate;
    trainingJobName: string;
}
