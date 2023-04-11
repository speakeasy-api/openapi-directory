import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFleetLocationUtilizationXAmzTargetEnum {
    GameLiftDescribeFleetLocationUtilization = "GameLift.DescribeFleetLocationUtilization"
}
export declare class DescribeFleetLocationUtilizationRequest extends SpeakeasyBase {
    describeFleetLocationUtilizationInput: shared.DescribeFleetLocationUtilizationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFleetLocationUtilizationXAmzTargetEnum;
}
export declare class DescribeFleetLocationUtilizationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFleetLocationUtilizationOutput?: shared.DescribeFleetLocationUtilizationOutput;
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
