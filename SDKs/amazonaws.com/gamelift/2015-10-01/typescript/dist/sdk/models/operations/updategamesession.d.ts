import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateGameSessionXAmzTargetEnum {
    GameLiftUpdateGameSession = "GameLift.UpdateGameSession"
}
export declare class UpdateGameSessionRequest extends SpeakeasyBase {
    updateGameSessionInput: shared.UpdateGameSessionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateGameSessionXAmzTargetEnum;
}
export declare class UpdateGameSessionResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
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
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateGameSessionOutput?: shared.UpdateGameSessionOutput;
}
