import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeScalingPoliciesXAmzTargetEnum {
    AnyScaleFrontendServiceDescribeScalingPolicies = "AnyScaleFrontendService.DescribeScalingPolicies"
}
export declare class DescribeScalingPoliciesRequest extends SpeakeasyBase {
    describeScalingPoliciesRequest: shared.DescribeScalingPoliciesRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
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
    xAmzTarget: DescribeScalingPoliciesXAmzTargetEnum;
}
export declare class DescribeScalingPoliciesResponse extends SpeakeasyBase {
    /**
     * ConcurrentUpdateException
     */
    concurrentUpdateException?: any;
    contentType: string;
    /**
     * Success
     */
    describeScalingPoliciesResponse?: shared.DescribeScalingPoliciesResponse;
    /**
     * FailedResourceAccessException
     */
    failedResourceAccessException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
