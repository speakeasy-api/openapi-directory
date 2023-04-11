import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeGameSessionsXAmzTargetEnum {
    GameLiftDescribeGameSessions = "GameLift.DescribeGameSessions"
}
export declare class DescribeGameSessionsRequest extends SpeakeasyBase {
    describeGameSessionsInput: shared.DescribeGameSessionsInput;
    /**
     * Pagination limit
     */
    limit?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeGameSessionsXAmzTargetEnum;
}
export declare class DescribeGameSessionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeGameSessionsOutput?: shared.DescribeGameSessionsOutput;
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
     * TerminalRoutingStrategyException
     */
    terminalRoutingStrategyException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * UnsupportedRegionException
     */
    unsupportedRegionException?: any;
}
