import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeScalingPoliciesXAmzTargetEnum {
    GameLiftDescribeScalingPolicies = "GameLift.DescribeScalingPolicies"
}
export declare class DescribeScalingPoliciesRequest extends SpeakeasyBase {
    describeScalingPoliciesInput: shared.DescribeScalingPoliciesInput;
    /**
     * Pagination limit
     */
    limit?: string;
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
    contentType: string;
    /**
     * Success
     */
    describeScalingPoliciesOutput?: shared.DescribeScalingPoliciesOutput;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * UnsupportedRegionException
     */
    unsupportedRegionException?: any;
}
