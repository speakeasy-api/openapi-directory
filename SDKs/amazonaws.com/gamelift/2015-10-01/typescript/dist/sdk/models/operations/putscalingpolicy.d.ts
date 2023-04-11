import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutScalingPolicyXAmzTargetEnum {
    GameLiftPutScalingPolicy = "GameLift.PutScalingPolicy"
}
export declare class PutScalingPolicyRequest extends SpeakeasyBase {
    putScalingPolicyInput: shared.PutScalingPolicyInput;
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
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * Success
     */
    putScalingPolicyOutput?: shared.PutScalingPolicyOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
