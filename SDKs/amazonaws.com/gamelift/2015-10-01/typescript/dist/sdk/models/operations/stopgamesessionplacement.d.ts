import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopGameSessionPlacementXAmzTargetEnum {
    GameLiftStopGameSessionPlacement = "GameLift.StopGameSessionPlacement"
}
export declare class StopGameSessionPlacementRequest extends SpeakeasyBase {
    stopGameSessionPlacementInput: shared.StopGameSessionPlacementInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopGameSessionPlacementXAmzTargetEnum;
}
export declare class StopGameSessionPlacementResponse extends SpeakeasyBase {
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
    stopGameSessionPlacementOutput?: shared.StopGameSessionPlacementOutput;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
