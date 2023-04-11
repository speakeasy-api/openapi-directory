import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateGameSessionQueueXAmzTargetEnum {
    GameLiftUpdateGameSessionQueue = "GameLift.UpdateGameSessionQueue"
}
export declare class UpdateGameSessionQueueRequest extends SpeakeasyBase {
    updateGameSessionQueueInput: shared.UpdateGameSessionQueueInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateGameSessionQueueXAmzTargetEnum;
}
export declare class UpdateGameSessionQueueResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    updateGameSessionQueueOutput?: shared.UpdateGameSessionQueueOutput;
}
