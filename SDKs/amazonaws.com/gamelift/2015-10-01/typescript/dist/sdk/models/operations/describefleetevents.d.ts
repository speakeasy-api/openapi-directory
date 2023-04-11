import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFleetEventsXAmzTargetEnum {
    GameLiftDescribeFleetEvents = "GameLift.DescribeFleetEvents"
}
export declare class DescribeFleetEventsRequest extends SpeakeasyBase {
    describeFleetEventsInput: shared.DescribeFleetEventsInput;
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
    xAmzTarget: DescribeFleetEventsXAmzTargetEnum;
}
export declare class DescribeFleetEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFleetEventsOutput?: shared.DescribeFleetEventsOutput;
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
