import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEcrRepositoryImageScanningConfigurationDetails } from "./awsecrrepositoryimagescanningconfigurationdetails";
import { AwsEcrRepositoryLifecyclePolicyDetails } from "./awsecrrepositorylifecyclepolicydetails";
/**
 * Provides information about an Amazon Elastic Container Registry repository.
 */
export declare class AwsEcrRepositoryDetails extends SpeakeasyBase {
    arn?: string;
    imageScanningConfiguration?: AwsEcrRepositoryImageScanningConfigurationDetails;
    imageTagMutability?: string;
    lifecyclePolicy?: AwsEcrRepositoryLifecyclePolicyDetails;
    repositoryName?: string;
    repositoryPolicyText?: string;
}
