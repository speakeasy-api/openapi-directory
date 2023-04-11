import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeCustomPluginRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Returns information about a custom plugin.
     */
    customPluginArn: string;
}
export declare class DescribeCustomPluginResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    describeCustomPluginResponse?: shared.DescribeCustomPluginResponse;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
