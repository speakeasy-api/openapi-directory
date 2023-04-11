import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeGameSessionQueuesXAmzTargetEnum {
    GameLiftDescribeGameSessionQueues = "GameLift.DescribeGameSessionQueues"
}
export declare class DescribeGameSessionQueuesRequest extends SpeakeasyBase {
    describeGameSessionQueuesInput: shared.DescribeGameSessionQueuesInput;
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
    xAmzTarget: DescribeGameSessionQueuesXAmzTargetEnum;
}
export declare class DescribeGameSessionQueuesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeGameSessionQueuesOutput?: shared.DescribeGameSessionQueuesOutput;
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
