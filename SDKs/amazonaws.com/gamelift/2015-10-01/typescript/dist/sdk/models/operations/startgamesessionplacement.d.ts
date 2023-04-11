import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartGameSessionPlacementXAmzTargetEnum {
    GameLiftStartGameSessionPlacement = "GameLift.StartGameSessionPlacement"
}
export declare class StartGameSessionPlacementRequest extends SpeakeasyBase {
    startGameSessionPlacementInput: shared.StartGameSessionPlacementInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartGameSessionPlacementXAmzTargetEnum;
}
export declare class StartGameSessionPlacementResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    startGameSessionPlacementOutput?: shared.StartGameSessionPlacementOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
