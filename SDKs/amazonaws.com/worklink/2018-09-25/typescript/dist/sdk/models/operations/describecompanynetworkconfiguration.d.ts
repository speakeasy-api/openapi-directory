import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeCompanyNetworkConfigurationRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the fleet.
     */
    fleetArn: string;
}
export declare class DescribeCompanyNetworkConfigurationRequest extends SpeakeasyBase {
    requestBody: DescribeCompanyNetworkConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeCompanyNetworkConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeCompanyNetworkConfigurationResponse?: shared.DescribeCompanyNetworkConfigurationResponse;
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
