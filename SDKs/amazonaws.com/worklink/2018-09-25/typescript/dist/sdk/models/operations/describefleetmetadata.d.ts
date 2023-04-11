import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeFleetMetadataRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the fleet.
     */
    fleetArn: string;
}
export declare class DescribeFleetMetadataRequest extends SpeakeasyBase {
    requestBody: DescribeFleetMetadataRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeFleetMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFleetMetadataResponse?: shared.DescribeFleetMetadataResponse;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
