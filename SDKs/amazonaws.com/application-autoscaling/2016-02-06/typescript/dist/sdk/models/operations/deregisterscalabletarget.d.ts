import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterScalableTargetXAmzTargetEnum {
    AnyScaleFrontendServiceDeregisterScalableTarget = "AnyScaleFrontendService.DeregisterScalableTarget"
}
export declare class DeregisterScalableTargetRequest extends SpeakeasyBase {
    deregisterScalableTargetRequest: shared.DeregisterScalableTargetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterScalableTargetXAmzTargetEnum;
}
export declare class DeregisterScalableTargetResponse extends SpeakeasyBase {
    /**
     * ConcurrentUpdateException
     */
    concurrentUpdateException?: any;
    contentType: string;
    /**
     * Success
     */
    deregisterScalableTargetResponse?: Record<string, any>;
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
