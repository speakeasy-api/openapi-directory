import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceSpecification } from "./inferencespecification";
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";
import { ModelPackageStatusEnum } from "./modelpackagestatusenum";
/**
 * Provides summary information about the model package.
 */
export declare class BatchDescribeModelPackageSummary extends SpeakeasyBase {
    creationTime: Date;
    /**
     * Defines how to perform inference generation after a training job is run.
     */
    inferenceSpecification: InferenceSpecification;
    modelApprovalStatus?: ModelApprovalStatusEnum;
    modelPackageArn: string;
    modelPackageDescription?: string;
    modelPackageGroupName: string;
    modelPackageStatus: ModelPackageStatusEnum;
    modelPackageVersion?: number;
}
