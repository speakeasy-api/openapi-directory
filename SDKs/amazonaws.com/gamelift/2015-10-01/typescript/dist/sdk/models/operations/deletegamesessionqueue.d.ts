import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteGameSessionQueueXAmzTargetEnum {
    GameLiftDeleteGameSessionQueue = "GameLift.DeleteGameSessionQueue"
}
export declare class DeleteGameSessionQueueRequest extends SpeakeasyBase {
    deleteGameSessionQueueInput: shared.DeleteGameSessionQueueInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteGameSessionQueueXAmzTargetEnum;
}
export declare class DeleteGameSessionQueueResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteGameSessionQueueOutput?: Record<string, any>;
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
     * TaggingFailedException
     */
    taggingFailedException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
