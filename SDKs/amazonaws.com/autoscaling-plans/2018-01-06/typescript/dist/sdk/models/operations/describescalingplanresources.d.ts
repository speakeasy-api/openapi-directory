import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeScalingPlanResourcesXAmzTargetEnum {
    AnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResources = "AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources"
}
export declare class DescribeScalingPlanResourcesRequest extends SpeakeasyBase {
    describeScalingPlanResourcesRequest: shared.DescribeScalingPlanResourcesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeScalingPlanResourcesXAmzTargetEnum;
}
export declare class DescribeScalingPlanResourcesResponse extends SpeakeasyBase {
    /**
     * ConcurrentUpdateException
     */
    concurrentUpdateException?: any;
    contentType: string;
    /**
     * Success
     */
    describeScalingPlanResourcesResponse?: shared.DescribeScalingPlanResourcesResponse;
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
