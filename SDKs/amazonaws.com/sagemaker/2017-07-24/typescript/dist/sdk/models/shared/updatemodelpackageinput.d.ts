import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalInferenceSpecificationDefinition } from "./additionalinferencespecificationdefinition";
import { ModelApprovalStatusEnum } from "./modelapprovalstatusenum";
export declare class UpdateModelPackageInput extends SpeakeasyBase {
    additionalInferenceSpecificationsToAdd?: AdditionalInferenceSpecificationDefinition[];
    approvalDescription?: string;
    customerMetadataProperties?: Record<string, string>;
    customerMetadataPropertiesToRemove?: string[];
    modelApprovalStatus?: ModelApprovalStatusEnum;
    modelPackageArn: string;
}
