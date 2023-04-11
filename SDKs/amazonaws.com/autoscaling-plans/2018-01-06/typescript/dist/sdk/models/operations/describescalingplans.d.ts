import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeScalingPlansXAmzTargetEnum {
    AnyScaleScalingPlannerFrontendServiceDescribeScalingPlans = "AnyScaleScalingPlannerFrontendService.DescribeScalingPlans"
}
export declare class DescribeScalingPlansRequest extends SpeakeasyBase {
    describeScalingPlansRequest: shared.DescribeScalingPlansRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeScalingPlansXAmzTargetEnum;
}
export declare class DescribeScalingPlansResponse extends SpeakeasyBase {
    /**
     * ConcurrentUpdateException
     */
    concurrentUpdateException?: any;
    contentType: string;
    /**
     * Success
     */
    describeScalingPlansResponse?: shared.DescribeScalingPlansResponse;
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
