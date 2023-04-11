import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalInferenceSpecificationDefinition } from "./additionalinferencespecificationdefinition";
import { DriftCheckBaselines } from "./driftcheckbaselines";
import { InferenceSpecification } from "./inferencespecification";
import { MetadataProperties } from "./metadataproperties";
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";
import { ModelMetrics } from "./modelmetrics";
import { ModelPackageValidationSpecification } from "./modelpackagevalidationspecification";
import { SourceAlgorithmSpecification } from "./sourcealgorithmspecification";
import { Tag } from "./tag";
export declare class CreateModelPackageInput extends SpeakeasyBase {
    additionalInferenceSpecifications?: AdditionalInferenceSpecificationDefinition[];
    certifyForMarketplace?: boolean;
    clientToken?: string;
    customerMetadataProperties?: Record<string, string>;
    domain?: string;
    driftCheckBaselines?: DriftCheckBaselines;
    inferenceSpecification?: InferenceSpecification;
    /**
     * Metadata properties of the tracking entity, trial, or trial component.
     */
    metadataProperties?: MetadataProperties;
    modelApprovalStatus?: ModelApprovalStatusEnum;
    modelMetrics?: ModelMetrics;
    modelPackageDescription?: string;
    modelPackageGroupName?: string;
    modelPackageName?: string;
    samplePayloadUrl?: string;
    sourceAlgorithmSpecification?: SourceAlgorithmSpecification;
    tags?: Tag[];
    task?: string;
    validationSpecification?: ModelPackageValidationSpecification;
}
