import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteScalingPolicyXAmzTargetEnum {
    GameLiftDeleteScalingPolicy = "GameLift.DeleteScalingPolicy"
}
export declare class DeleteScalingPolicyRequest extends SpeakeasyBase {
    deleteScalingPolicyInput: shared.DeleteScalingPolicyInput;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
