import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartFleetActionsXAmzTargetEnum {
    GameLiftStartFleetActions = "GameLift.StartFleetActions"
}
export declare class StartFleetActionsRequest extends SpeakeasyBase {
    startFleetActionsInput: shared.StartFleetActionsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartFleetActionsXAmzTargetEnum;
}
export declare class StartFleetActionsResponse extends SpeakeasyBase {
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
    startFleetActionsOutput?: shared.StartFleetActionsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * UnsupportedRegionException
     */
    unsupportedRegionException?: any;
}
