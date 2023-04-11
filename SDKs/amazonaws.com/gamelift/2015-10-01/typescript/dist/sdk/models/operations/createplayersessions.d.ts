import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePlayerSessionsXAmzTargetEnum {
    GameLiftCreatePlayerSessions = "GameLift.CreatePlayerSessions"
}
export declare class CreatePlayerSessionsRequest extends SpeakeasyBase {
    createPlayerSessionsInput: shared.CreatePlayerSessionsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePlayerSessionsXAmzTargetEnum;
}
export declare class CreatePlayerSessionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createPlayerSessionsOutput?: shared.CreatePlayerSessionsOutput;
    /**
     * GameSessionFullException
     */
    gameSessionFullException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidGameSessionStatusException
     */
    invalidGameSessionStatusException?: any;
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
     * TerminalRoutingStrategyException
     */
    terminalRoutingStrategyException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
