import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum EnableApplicationLayerAutomaticResponseXAmzTargetEnum {
    AWSShield20160616EnableApplicationLayerAutomaticResponse = "AWSShield_20160616.EnableApplicationLayerAutomaticResponse"
}
export declare class EnableApplicationLayerAutomaticResponseRequest extends SpeakeasyBase {
    enableApplicationLayerAutomaticResponseRequest: shared.EnableApplicationLayerAutomaticResponseRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableApplicationLayerAutomaticResponseXAmzTargetEnum;
}
export declare class EnableApplicationLayerAutomaticResponseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    enableApplicationLayerAutomaticResponseResponse?: Record<string, any>;
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
     * LimitsExceededException
     */
    limitsExceededException?: any;
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
