import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateGameServerGroupXAmzTargetEnum {
    GameLiftCreateGameServerGroup = "GameLift.CreateGameServerGroup"
}
export declare class CreateGameServerGroupRequest extends SpeakeasyBase {
    createGameServerGroupInput: shared.CreateGameServerGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateGameServerGroupXAmzTargetEnum;
}
export declare class CreateGameServerGroupResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createGameServerGroupOutput?: shared.CreateGameServerGroupOutput;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
