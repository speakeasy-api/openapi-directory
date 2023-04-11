import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFleetLocationAttributesXAmzTargetEnum {
    GameLiftDescribeFleetLocationAttributes = "GameLift.DescribeFleetLocationAttributes"
}
export declare class DescribeFleetLocationAttributesRequest extends SpeakeasyBase {
    describeFleetLocationAttributesInput: shared.DescribeFleetLocationAttributesInput;
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
    xAmzTarget: DescribeFleetLocationAttributesXAmzTargetEnum;
}
export declare class DescribeFleetLocationAttributesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFleetLocationAttributesOutput?: shared.DescribeFleetLocationAttributesOutput;
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
