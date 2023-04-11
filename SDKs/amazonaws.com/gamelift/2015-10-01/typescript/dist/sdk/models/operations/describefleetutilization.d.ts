import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFleetUtilizationXAmzTargetEnum {
    GameLiftDescribeFleetUtilization = "GameLift.DescribeFleetUtilization"
}
export declare class DescribeFleetUtilizationRequest extends SpeakeasyBase {
    describeFleetUtilizationInput: shared.DescribeFleetUtilizationInput;
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
    xAmzTarget: DescribeFleetUtilizationXAmzTargetEnum;
}
export declare class DescribeFleetUtilizationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFleetUtilizationOutput?: shared.DescribeFleetUtilizationOutput;
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
