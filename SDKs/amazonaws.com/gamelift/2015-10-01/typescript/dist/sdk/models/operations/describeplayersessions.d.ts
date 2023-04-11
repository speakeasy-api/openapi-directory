import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePlayerSessionsXAmzTargetEnum {
    GameLiftDescribePlayerSessions = "GameLift.DescribePlayerSessions"
}
export declare class DescribePlayerSessionsRequest extends SpeakeasyBase {
    describePlayerSessionsInput: shared.DescribePlayerSessionsInput;
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
    xAmzTarget: DescribePlayerSessionsXAmzTargetEnum;
}
export declare class DescribePlayerSessionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePlayerSessionsOutput?: shared.DescribePlayerSessionsOutput;
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
