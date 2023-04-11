import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteGameServerGroupXAmzTargetEnum {
    GameLiftDeleteGameServerGroup = "GameLift.DeleteGameServerGroup"
}
export declare class DeleteGameServerGroupRequest extends SpeakeasyBase {
    deleteGameServerGroupInput: shared.DeleteGameServerGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteGameServerGroupXAmzTargetEnum;
}
export declare class DeleteGameServerGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteGameServerGroupOutput?: shared.DeleteGameServerGroupOutput;
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
