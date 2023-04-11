import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateGameSessionQueueXAmzTargetEnum {
    GameLiftCreateGameSessionQueue = "GameLift.CreateGameSessionQueue"
}
export declare class CreateGameSessionQueueRequest extends SpeakeasyBase {
    createGameSessionQueueInput: shared.CreateGameSessionQueueInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateGameSessionQueueXAmzTargetEnum;
}
export declare class CreateGameSessionQueueResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createGameSessionQueueOutput?: shared.CreateGameSessionQueueOutput;
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
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TaggingFailedException
     */
    taggingFailedException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
