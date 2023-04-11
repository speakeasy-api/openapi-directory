import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The container for the metadata for the ClarifyCheck step. For more information, see the topic on <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/build-and-manage-steps.html#step-type-clarify-check">ClarifyCheck step</a> in the <i>Amazon SageMaker Developer Guide</i>.
 */
export declare class ClarifyCheckStepMetadata extends SpeakeasyBase {
    baselineUsedForDriftCheckConstraints?: string;
    calculatedBaselineConstraints?: string;
    checkJobArn?: string;
    checkType?: string;
    modelPackageGroupName?: string;
    registerNewBaseline?: boolean;
    skipCheck?: boolean;
    violationReport?: string;
}
