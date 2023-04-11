import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateTrailXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateTrail = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail"
}
export declare class UpdateTrailRequest extends SpeakeasyBase {
    updateTrailRequest: shared.UpdateTrailRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTrailXAmzTargetEnum;
}
export declare class UpdateTrailResponse extends SpeakeasyBase {
    /**
     * CloudTrailARNInvalidException
     */
    cloudTrailARNInvalidException?: any;
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
     * InvalidEventSelectorsException
     */
    invalidEventSelectorsException?: any;
    /**
     * InvalidHomeRegionException
     */
    invalidHomeRegionException?: any;
    /**
     * InvalidKmsKeyIdException
     */
    invalidKmsKeyIdException?: any;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * S3BucketDoesNotExistException
     */
    s3BucketDoesNotExistException?: any;
    /**
     * TrailNotFoundException
     */
    trailNotFoundException?: any;
    /**
     * TrailNotProvidedException
     */
    trailNotProvidedException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
    /**
     * Success
     */
    updateTrailResponse?: shared.UpdateTrailResponse;
}
