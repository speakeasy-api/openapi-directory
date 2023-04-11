import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateApplicationLayerAutomaticResponseXAmzTargetEnum {
    AWSShield20160616UpdateApplicationLayerAutomaticResponse = "AWSShield_20160616.UpdateApplicationLayerAutomaticResponse"
}
export declare class UpdateApplicationLayerAutomaticResponseRequest extends SpeakeasyBase {
    updateApplicationLayerAutomaticResponseRequest: shared.UpdateApplicationLayerAutomaticResponseRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateApplicationLayerAutomaticResponseXAmzTargetEnum;
}
export declare class UpdateApplicationLayerAutomaticResponseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OptimisticLockException
     */
    optimisticLockException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateApplicationLayerAutomaticResponseResponse?: Record<string, any>;
}
