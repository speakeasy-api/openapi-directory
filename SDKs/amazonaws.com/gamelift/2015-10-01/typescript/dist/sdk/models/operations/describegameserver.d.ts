import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeGameServerXAmzTargetEnum {
    GameLiftDescribeGameServer = "GameLift.DescribeGameServer"
}
export declare class DescribeGameServerRequest extends SpeakeasyBase {
    describeGameServerInput: shared.DescribeGameServerInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeGameServerXAmzTargetEnum;
}
export declare class DescribeGameServerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeGameServerOutput?: shared.DescribeGameServerOutput;
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
