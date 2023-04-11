import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SuspendGameServerGroupXAmzTargetEnum {
    GameLiftSuspendGameServerGroup = "GameLift.SuspendGameServerGroup"
}
export declare class SuspendGameServerGroupRequest extends SpeakeasyBase {
    suspendGameServerGroupInput: shared.SuspendGameServerGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SuspendGameServerGroupXAmzTargetEnum;
}
export declare class SuspendGameServerGroupResponse extends SpeakeasyBase {
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
     * Success
     */
    suspendGameServerGroupOutput?: shared.SuspendGameServerGroupOutput;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
