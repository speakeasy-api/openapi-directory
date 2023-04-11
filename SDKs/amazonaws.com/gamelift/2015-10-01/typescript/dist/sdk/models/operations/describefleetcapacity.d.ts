import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFleetCapacityXAmzTargetEnum {
    GameLiftDescribeFleetCapacity = "GameLift.DescribeFleetCapacity"
}
export declare class DescribeFleetCapacityRequest extends SpeakeasyBase {
    describeFleetCapacityInput: shared.DescribeFleetCapacityInput;
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
    xAmzTarget: DescribeFleetCapacityXAmzTargetEnum;
}
export declare class DescribeFleetCapacityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFleetCapacityOutput?: shared.DescribeFleetCapacityOutput;
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
