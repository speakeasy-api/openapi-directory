import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalInferenceSpecificationDefinition } from "./additionalinferencespecificationdefinition";
import { DriftCheckBaselines } from "./driftcheckbaselines";
import { InferenceSpecification } from "./inferencespecification";
import { MetadataProperties } from "./metadataproperties";
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";
import { ModelMetrics } from "./modelmetrics";
import { ModelPackageStatusDetails } from "./modelpackagestatusdetails";
import { ModelPackageStatusEnum } from "./modelpackagestatusenum";
import { ModelPackageValidationSpecification } from "./modelpackagevalidationspecification";
import { SourceAlgorithmSpecification } from "./sourcealgorithmspecification";
import { UserContext } from "./usercontext";
/**
 * Success
 */
export declare class DescribeModelPackageOutput extends SpeakeasyBase {
    additionalInferenceSpecifications?: AdditionalInferenceSpecificationDefinition[];
    approvalDescription?: string;
    certifyForMarketplace?: boolean;
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    createdBy?: UserContext;
    creationTime: Date;
    customerMetadataProperties?: Record<string, string>;
    domain?: string;
    driftCheckBaselines?: DriftCheckBaselines;
    inferenceSpecification?: InferenceSpecification;
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    /**
     * Metadata properties of the tracking entity, trial, or trial component.
     */
    metadataProperties?: MetadataProperties;
    modelApprovalStatus?: ModelApprovalStatusEnum;
    modelMetrics?: ModelMetrics;
    modelPackageArn: string;
    modelPackageDescription?: string;
    modelPackageGroupName?: string;
    modelPackageName: string;
    modelPackageStatus: ModelPackageStatusEnum;
    modelPackageStatusDetails: ModelPackageStatusDetails;
    modelPackageVersion?: number;
    samplePayloadUrl?: string;
    sourceAlgorithmSpecification?: SourceAlgorithmSpecification;
    task?: string;
    validationSpecification?: ModelPackageValidationSpecification;
}
