import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFleetLocationCapacityXAmzTargetEnum {
    GameLiftDescribeFleetLocationCapacity = "GameLift.DescribeFleetLocationCapacity"
}
export declare class DescribeFleetLocationCapacityRequest extends SpeakeasyBase {
    describeFleetLocationCapacityInput: shared.DescribeFleetLocationCapacityInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFleetLocationCapacityXAmzTargetEnum;
}
export declare class DescribeFleetLocationCapacityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFleetLocationCapacityOutput?: shared.DescribeFleetLocationCapacityOutput;
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
