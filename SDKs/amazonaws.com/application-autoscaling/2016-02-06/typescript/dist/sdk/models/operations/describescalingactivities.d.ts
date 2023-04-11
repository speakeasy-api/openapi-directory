import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeScalingActivitiesXAmzTargetEnum {
    AnyScaleFrontendServiceDescribeScalingActivities = "AnyScaleFrontendService.DescribeScalingActivities"
}
export declare class DescribeScalingActivitiesRequest extends SpeakeasyBase {
    describeScalingActivitiesRequest: shared.DescribeScalingActivitiesRequest;
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
    xAmzTarget: DescribeScalingActivitiesXAmzTargetEnum;
}
export declare class DescribeScalingActivitiesResponse extends SpeakeasyBase {
    /**
     * ConcurrentUpdateException
     */
    concurrentUpdateException?: any;
    contentType: string;
    /**
     * Success
     */
    describeScalingActivitiesResponse?: shared.DescribeScalingActivitiesResponse;
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
