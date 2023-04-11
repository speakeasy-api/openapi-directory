import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeGameServerGroupXAmzTargetEnum {
    GameLiftDescribeGameServerGroup = "GameLift.DescribeGameServerGroup"
}
export declare class DescribeGameServerGroupRequest extends SpeakeasyBase {
    describeGameServerGroupInput: shared.DescribeGameServerGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeGameServerGroupXAmzTargetEnum;
}
export declare class DescribeGameServerGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeGameServerGroupOutput?: shared.DescribeGameServerGroupOutput;
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
