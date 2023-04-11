import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeQueryXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101DescribeQuery = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery"
}
export declare class DescribeQueryRequest extends SpeakeasyBase {
    describeQueryRequest: shared.DescribeQueryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeQueryXAmzTargetEnum;
}
export declare class DescribeQueryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeQueryResponse?: shared.DescribeQueryResponse;
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
