import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ResumeGameServerGroupXAmzTargetEnum {
    GameLiftResumeGameServerGroup = "GameLift.ResumeGameServerGroup"
}
export declare class ResumeGameServerGroupRequest extends SpeakeasyBase {
    resumeGameServerGroupInput: shared.ResumeGameServerGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResumeGameServerGroupXAmzTargetEnum;
}
export declare class ResumeGameServerGroupResponse extends SpeakeasyBase {
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
    resumeGameServerGroupOutput?: shared.ResumeGameServerGroupOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
