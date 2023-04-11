import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopMatchmakingXAmzTargetEnum {
    GameLiftStopMatchmaking = "GameLift.StopMatchmaking"
}
export declare class StopMatchmakingRequest extends SpeakeasyBase {
    stopMatchmakingInput: shared.StopMatchmakingInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopMatchmakingXAmzTargetEnum;
}
export declare class StopMatchmakingResponse extends SpeakeasyBase {
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
    stopMatchmakingOutput?: Record<string, any>;
    /**
     * UnsupportedRegionException
     */
    unsupportedRegionException?: any;
}
