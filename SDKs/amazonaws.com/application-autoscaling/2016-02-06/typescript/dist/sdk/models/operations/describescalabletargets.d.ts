import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeScalableTargetsXAmzTargetEnum {
    AnyScaleFrontendServiceDescribeScalableTargets = "AnyScaleFrontendService.DescribeScalableTargets"
}
export declare class DescribeScalableTargetsRequest extends SpeakeasyBase {
    describeScalableTargetsRequest: shared.DescribeScalableTargetsRequest;
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
    xAmzTarget: DescribeScalableTargetsXAmzTargetEnum;
}
export declare class DescribeScalableTargetsResponse extends SpeakeasyBase {
    /**
     * ConcurrentUpdateException
     */
    concurrentUpdateException?: any;
    contentType: string;
    /**
     * Success
     */
    describeScalableTargetsResponse?: shared.DescribeScalableTargetsResponse;
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
