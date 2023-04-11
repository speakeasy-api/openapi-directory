import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateGameServerGroupXAmzTargetEnum {
    GameLiftUpdateGameServerGroup = "GameLift.UpdateGameServerGroup"
}
export declare class UpdateGameServerGroupRequest extends SpeakeasyBase {
    updateGameServerGroupInput: shared.UpdateGameServerGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateGameServerGroupXAmzTargetEnum;
}
export declare class UpdateGameServerGroupResponse extends SpeakeasyBase {
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
    updateGameServerGroupOutput?: shared.UpdateGameServerGroupOutput;
}
