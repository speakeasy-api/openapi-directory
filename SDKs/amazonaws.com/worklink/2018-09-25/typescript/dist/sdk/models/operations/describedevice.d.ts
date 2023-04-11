import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeDeviceRequestBody extends SpeakeasyBase {
    /**
     * A unique identifier for a registered user's device.
     */
    deviceId: string;
    /**
     * The ARN of the fleet.
     */
    fleetArn: string;
}
export declare class DescribeDeviceRequest extends SpeakeasyBase {
    requestBody: DescribeDeviceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDeviceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDeviceResponse?: shared.DescribeDeviceResponse;
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
