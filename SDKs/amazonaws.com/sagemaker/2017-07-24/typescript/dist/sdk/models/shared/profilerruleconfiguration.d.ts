import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessingInstanceTypeEnum } from "./processinginstancetypeenum";
/**
 * Configuration information for profiling rules.
 */
export declare class ProfilerRuleConfiguration extends SpeakeasyBase {
    instanceType?: ProcessingInstanceTypeEnum;
    localPath?: string;
    ruleConfigurationName: string;
    ruleEvaluatorImage: string;
    ruleParameters?: Record<string, string>;
    s3OutputPath?: string;
    volumeSizeInGB?: number;
}
