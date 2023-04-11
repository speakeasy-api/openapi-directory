import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutInsightSelectorsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101PutInsightSelectors = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors"
}
export declare class PutInsightSelectorsRequest extends SpeakeasyBase {
    putInsightSelectorsRequest: shared.PutInsightSelectorsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutInsightSelectorsXAmzTargetEnum;
}
export declare class PutInsightSelectorsResponse extends SpeakeasyBase {
    /**
     * CloudTrailARNInvalidException
     */
    cloudTrailARNInvalidException?: any;
    contentType: string;
    /**
     * InsufficientEncryptionPolicyException
     */
    insufficientEncryptionPolicyException?: any;
    /**
     * InsufficientS3BucketPolicyException
     */
    insufficientS3BucketPolicyException?: any;
    /**
     * InvalidHomeRegionException
     */
    invalidHomeRegionException?: any;
    /**
     * InvalidInsightSelectorsException
     */
    invalidInsightSelectorsException?: any;
    /**
     * InvalidTrailNameException
     */
    invalidTrailNameException?: any;
    /**
     * KmsException
     */
    kmsException?: any;
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
     * Success
     */
    putInsightSelectorsResponse?: shared.PutInsightSelectorsResponse;
    /**
     * S3BucketDoesNotExistException
     */
    s3BucketDoesNotExistException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TrailNotFoundException
     */
    trailNotFoundException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
