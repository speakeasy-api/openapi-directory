import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateTrailXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101CreateTrail = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail"
}
export declare class CreateTrailRequest extends SpeakeasyBase {
    createTrailRequest: shared.CreateTrailRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTrailXAmzTargetEnum;
}
export declare class CreateTrailResponse extends SpeakeasyBase {
    /**
     * CloudTrailAccessNotEnabledException
     */
    cloudTrailAccessNotEnabledException?: any;
    /**
     * CloudTrailInvalidClientTokenIdException
     */
    cloudTrailInvalidClientTokenIdException?: any;
    /**
     * CloudWatchLogsDeliveryUnavailableException
     */
    cloudWatchLogsDeliveryUnavailableException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createTrailResponse?: shared.CreateTrailResponse;
    /**
     * InsufficientDependencyServiceAccessPermissionException
     */
    insufficientDependencyServiceAccessPermissionException?: any;
    /**
     * InsufficientEncryptionPolicyException
     */
    insufficientEncryptionPolicyException?: any;
    /**
     * InsufficientS3BucketPolicyException
     */
    insufficientS3BucketPolicyException?: any;
    /**
     * InsufficientSnsTopicPolicyException
     */
    insufficientSnsTopicPolicyException?: any;
    /**
     * InvalidCloudWatchLogsLogGroupArnException
     */
    invalidCloudWatchLogsLogGroupArnException?: any;
    /**
     * InvalidCloudWatchLogsRoleArnException
     */
    invalidCloudWatchLogsRoleArnException?: any;
    /**
     * InvalidKmsKeyIdException
     */
    invalidKmsKeyIdException?: any;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidS3BucketNameException
     */
    invalidS3BucketNameException?: any;
    /**
     * InvalidS3PrefixException
     */
    invalidS3PrefixException?: any;
    /**
     * InvalidSnsTopicNameException
     */
    invalidSnsTopicNameException?: any;
    /**
     * InvalidTagParameterException
     */
    invalidTagParameterException?: any;
    /**
     * InvalidTrailNameException
     */
    invalidTrailNameException?: any;
    /**
     * KmsException
     */
    kmsException?: any;
    /**
     * KmsKeyDisabledException
     */
    kmsKeyDisabledException?: any;
    /**
     * KmsKeyNotFoundException
     */
    kmsKeyNotFoundException?: any;
    /**
     * MaximumNumberOfTrailsExceededException
     */
    maximumNumberOfTrailsExceededException?: any;
    /**
     * NoManagementAccountSLRExistsException
     */
    noManagementAccountSLRExistsException?: any;
    /**
     * NotOrganizationMasterAccountException
     */
    notOrganizationMasterAccountException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * OrganizationNotInAllFeaturesModeException
     */
    organizationNotInAllFeaturesModeException?: any;
    /**
     * OrganizationsNotInUseException
     */
    organizationsNotInUseException?: any;
    /**
     * S3BucketDoesNotExistException
     */
    s3BucketDoesNotExistException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TagsLimitExceededException
     */
    tagsLimitExceededException?: any;
    /**
     * TrailAlreadyExistsException
     */
    trailAlreadyExistsException?: any;
    /**
     * TrailNotProvidedException
     */
    trailNotProvidedException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
