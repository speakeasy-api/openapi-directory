import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopFleetActionsXAmzTargetEnum {
    GameLiftStopFleetActions = "GameLift.StopFleetActions"
}
export declare class StopFleetActionsRequest extends SpeakeasyBase {
    stopFleetActionsInput: shared.StopFleetActionsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopFleetActionsXAmzTargetEnum;
}
export declare class StopFleetActionsResponse extends SpeakeasyBase {
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
    stopFleetActionsOutput?: shared.StopFleetActionsOutput;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * UnsupportedRegionException
     */
    unsupportedRegionException?: any;
}
