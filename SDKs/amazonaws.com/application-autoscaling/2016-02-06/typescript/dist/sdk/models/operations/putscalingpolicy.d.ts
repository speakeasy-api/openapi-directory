import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutScalingPolicyXAmzTargetEnum {
    AnyScaleFrontendServicePutScalingPolicy = "AnyScaleFrontendService.PutScalingPolicy"
}
export declare class PutScalingPolicyRequest extends SpeakeasyBase {
    putScalingPolicyRequest: shared.PutScalingPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutScalingPolicyXAmzTargetEnum;
}
export declare class PutScalingPolicyResponse extends SpeakeasyBase {
    /**
     * ConcurrentUpdateException
     */
    concurrentUpdateException?: any;
    contentType: string;
    /**
     * FailedResourceAccessException
     */
    failedResourceAccessException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ObjectNotFoundException
     */
    objectNotFoundException?: any;
    /**
     * Success
     */
    putScalingPolicyResponse?: shared.PutScalingPolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
