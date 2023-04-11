import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the metadata for a Quality check step. For more information, see the topic on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/build-and-manage-steps.html#step-type-quality-check">QualityCheck step</a> in the <i>Amazon SageMaker Developer Guide</i>.
 */
export declare class QualityCheckStepMetadata extends SpeakeasyBase {
    baselineUsedForDriftCheckConstraints?: string;
    baselineUsedForDriftCheckStatistics?: string;
    calculatedBaselineConstraints?: string;
    calculatedBaselineStatistics?: string;
    checkJobArn?: string;
    checkType?: string;
    modelPackageGroupName?: string;
    registerNewBaseline?: boolean;
    skipCheck?: boolean;
    violationReport?: string;
}
