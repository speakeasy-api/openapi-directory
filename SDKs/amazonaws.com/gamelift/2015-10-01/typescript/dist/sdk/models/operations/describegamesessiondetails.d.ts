import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeGameSessionDetailsXAmzTargetEnum {
    GameLiftDescribeGameSessionDetails = "GameLift.DescribeGameSessionDetails"
}
export declare class DescribeGameSessionDetailsRequest extends SpeakeasyBase {
    describeGameSessionDetailsInput: shared.DescribeGameSessionDetailsInput;
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
    xAmzTarget: DescribeGameSessionDetailsXAmzTargetEnum;
}
export declare class DescribeGameSessionDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeGameSessionDetailsOutput?: shared.DescribeGameSessionDetailsOutput;
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
