import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartMatchmakingXAmzTargetEnum {
    GameLiftStartMatchmaking = "GameLift.StartMatchmaking"
}
export declare class StartMatchmakingRequest extends SpeakeasyBase {
    startMatchmakingInput: shared.StartMatchmakingInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartMatchmakingXAmzTargetEnum;
}
export declare class StartMatchmakingResponse extends SpeakeasyBase {
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
    startMatchmakingOutput?: shared.StartMatchmakingOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedRegionException
     */
    unsupportedRegionException?: any;
}
