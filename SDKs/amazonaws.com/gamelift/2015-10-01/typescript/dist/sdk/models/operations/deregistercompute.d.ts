import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterComputeXAmzTargetEnum {
    GameLiftDeregisterCompute = "GameLift.DeregisterCompute"
}
export declare class DeregisterComputeRequest extends SpeakeasyBase {
    deregisterComputeInput: shared.DeregisterComputeInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterComputeXAmzTargetEnum;
}
export declare class DeregisterComputeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deregisterComputeOutput?: Record<string, any>;
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
