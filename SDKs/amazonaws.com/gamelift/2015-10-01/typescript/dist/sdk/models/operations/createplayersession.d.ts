import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePlayerSessionXAmzTargetEnum {
    GameLiftCreatePlayerSession = "GameLift.CreatePlayerSession"
}
export declare class CreatePlayerSessionRequest extends SpeakeasyBase {
    createPlayerSessionInput: shared.CreatePlayerSessionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePlayerSessionXAmzTargetEnum;
}
export declare class CreatePlayerSessionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createPlayerSessionOutput?: shared.CreatePlayerSessionOutput;
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
