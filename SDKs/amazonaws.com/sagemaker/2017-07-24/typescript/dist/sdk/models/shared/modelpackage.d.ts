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
import { Tag } from "./tag";
import { UserContext } from "./usercontext";
/**
 * A versioned model that can be deployed for SageMaker inference.
 */
export declare class ModelPackage extends SpeakeasyBase {
    additionalInferenceSpecifications?: AdditionalInferenceSpecificationDefinition[];
    approvalDescription?: string;
    certifyForMarketplace?: boolean;
    createdBy?: UserContext;
    creationTime?: Date;
    customerMetadataProperties?: Record<string, string>;
    domain?: string;
    driftCheckBaselines?: DriftCheckBaselines;
    inferenceSpecification?: InferenceSpecification;
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    metadataProperties?: MetadataProperties;
    modelApprovalStatus?: ModelApprovalStatusEnum;
    modelMetrics?: ModelMetrics;
    modelPackageArn?: string;
    modelPackageDescription?: string;
    modelPackageGroupName?: string;
    modelPackageName?: string;
    modelPackageStatus?: ModelPackageStatusEnum;
    modelPackageStatusDetails?: ModelPackageStatusDetails;
    modelPackageVersion?: number;
    samplePayloadUrl?: string;
    sourceAlgorithmSpecification?: SourceAlgorithmSpecification;
    tags?: Tag[];
    task?: string;
    validationSpecification?: ModelPackageValidationSpecification;
}
