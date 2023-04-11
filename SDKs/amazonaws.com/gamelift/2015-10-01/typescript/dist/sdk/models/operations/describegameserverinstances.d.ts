import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeGameServerInstancesXAmzTargetEnum {
    GameLiftDescribeGameServerInstances = "GameLift.DescribeGameServerInstances"
}
export declare class DescribeGameServerInstancesRequest extends SpeakeasyBase {
    describeGameServerInstancesInput: shared.DescribeGameServerInstancesInput;
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
    xAmzTarget: DescribeGameServerInstancesXAmzTargetEnum;
}
export declare class DescribeGameServerInstancesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeGameServerInstancesOutput?: shared.DescribeGameServerInstancesOutput;
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
