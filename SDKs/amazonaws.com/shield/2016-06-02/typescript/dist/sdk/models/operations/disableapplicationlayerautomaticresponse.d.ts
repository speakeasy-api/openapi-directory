import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisableApplicationLayerAutomaticResponseXAmzTargetEnum {
    AWSShield20160616DisableApplicationLayerAutomaticResponse = "AWSShield_20160616.DisableApplicationLayerAutomaticResponse"
}
export declare class DisableApplicationLayerAutomaticResponseRequest extends SpeakeasyBase {
    disableApplicationLayerAutomaticResponseRequest: shared.DisableApplicationLayerAutomaticResponseRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableApplicationLayerAutomaticResponseXAmzTargetEnum;
}
export declare class DisableApplicationLayerAutomaticResponseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disableApplicationLayerAutomaticResponseResponse?: Record<string, any>;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
