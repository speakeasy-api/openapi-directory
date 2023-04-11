import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteScalingPolicyXAmzTargetEnum {
    AnyScaleFrontendServiceDeleteScalingPolicy = "AnyScaleFrontendService.DeleteScalingPolicy"
}
export declare class DeleteScalingPolicyRequest extends SpeakeasyBase {
    deleteScalingPolicyRequest: shared.DeleteScalingPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteScalingPolicyXAmzTargetEnum;
}
export declare class DeleteScalingPolicyResponse extends SpeakeasyBase {
    /**
     * ConcurrentUpdateException
     */
    concurrentUpdateException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteScalingPolicyResponse?: Record<string, any>;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * ObjectNotFoundException
     */
    objectNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
