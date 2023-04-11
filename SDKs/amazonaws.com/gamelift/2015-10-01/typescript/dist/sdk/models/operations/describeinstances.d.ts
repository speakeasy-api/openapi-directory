import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeInstancesXAmzTargetEnum {
    GameLiftDescribeInstances = "GameLift.DescribeInstances"
}
export declare class DescribeInstancesRequest extends SpeakeasyBase {
    describeInstancesInput: shared.DescribeInstancesInput;
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
    xAmzTarget: DescribeInstancesXAmzTargetEnum;
}
export declare class DescribeInstancesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeInstancesOutput?: shared.DescribeInstancesOutput;
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
     * UnsupportedRegionException
     */
    unsupportedRegionException?: any;
}
