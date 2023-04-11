import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFleetAttributesXAmzTargetEnum {
    GameLiftDescribeFleetAttributes = "GameLift.DescribeFleetAttributes"
}
export declare class DescribeFleetAttributesRequest extends SpeakeasyBase {
    describeFleetAttributesInput: shared.DescribeFleetAttributesInput;
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
    xAmzTarget: DescribeFleetAttributesXAmzTargetEnum;
}
export declare class DescribeFleetAttributesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFleetAttributesOutput?: shared.DescribeFleetAttributesOutput;
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
