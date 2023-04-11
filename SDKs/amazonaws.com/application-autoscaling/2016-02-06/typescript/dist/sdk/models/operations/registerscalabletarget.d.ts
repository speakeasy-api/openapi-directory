import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterScalableTargetXAmzTargetEnum {
    AnyScaleFrontendServiceRegisterScalableTarget = "AnyScaleFrontendService.RegisterScalableTarget"
}
export declare class RegisterScalableTargetRequest extends SpeakeasyBase {
    registerScalableTargetRequest: shared.RegisterScalableTargetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterScalableTargetXAmzTargetEnum;
}
export declare class RegisterScalableTargetResponse extends SpeakeasyBase {
    /**
     * ConcurrentUpdateException
     */
    concurrentUpdateException?: any;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    registerScalableTargetResponse?: shared.RegisterScalableTargetResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
