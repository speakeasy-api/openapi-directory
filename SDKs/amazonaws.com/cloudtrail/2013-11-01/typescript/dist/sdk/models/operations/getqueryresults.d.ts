import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetQueryResultsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101GetQueryResults = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults"
}
export declare class GetQueryResultsRequest extends SpeakeasyBase {
    getQueryResultsRequest: shared.GetQueryResultsRequest;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetQueryResultsXAmzTargetEnum;
}
export declare class GetQueryResultsResponse extends SpeakeasyBase {
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
     * Success
     */
    getQueryResultsResponse?: shared.GetQueryResultsResponse;
    /**
     * InactiveEventDataStoreException
     */
    inactiveEventDataStoreException?: any;
    /**
     * InsufficientEncryptionPolicyException
     */
    insufficientEncryptionPolicyException?: any;
    /**
     * InvalidMaxResultsException
     */
    invalidMaxResultsException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NoManagementAccountSLRExistsException
     */
    noManagementAccountSLRExistsException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * QueryIdNotFoundException
     */
    queryIdNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
