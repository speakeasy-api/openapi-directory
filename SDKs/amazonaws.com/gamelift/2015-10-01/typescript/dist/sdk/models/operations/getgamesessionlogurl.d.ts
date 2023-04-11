import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetGameSessionLogUrlXAmzTargetEnum {
    GameLiftGetGameSessionLogUrl = "GameLift.GetGameSessionLogUrl"
}
export declare class GetGameSessionLogUrlRequest extends SpeakeasyBase {
    getGameSessionLogUrlInput: shared.GetGameSessionLogUrlInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetGameSessionLogUrlXAmzTargetEnum;
}
export declare class GetGameSessionLogUrlResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getGameSessionLogUrlOutput?: shared.GetGameSessionLogUrlOutput;
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
