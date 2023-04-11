import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartQueryXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101StartQuery = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery"
}
export declare class StartQueryRequest extends SpeakeasyBase {
    startQueryRequest: shared.StartQueryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartQueryXAmzTargetEnum;
}
export declare class StartQueryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EventDataStoreARNInvalidException
     */
    eventDataStoreARNInvalidException?: any;
    /**
     * EventDataStoreNotFoundException
     */
    eventDataStoreNotFoundException?: any;
    /**
     * InactiveEventDataStoreException
     */
    inactiveEventDataStoreException?: any;
    /**
     * InsufficientEncryptionPolicyException
     */
    insufficientEncryptionPolicyException?: any;
    /**
     * InsufficientS3BucketPolicyException
     */
    insufficientS3BucketPolicyException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidQueryStatementException
     */
    invalidQueryStatementException?: any;
    /**
     * InvalidS3BucketNameException
     */
    invalidS3BucketNameException?: any;
    /**
     * InvalidS3PrefixException
     */
    invalidS3PrefixException?: any;
    /**
     * MaxConcurrentQueriesException
     */
    maxConcurrentQueriesException?: any;
    /**
     * NoManagementAccountSLRExistsException
     */
    noManagementAccountSLRExistsException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * S3BucketDoesNotExistException
     */
    s3BucketDoesNotExistException?: any;
    /**
     * Success
     */
    startQueryResponse?: shared.StartQueryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
