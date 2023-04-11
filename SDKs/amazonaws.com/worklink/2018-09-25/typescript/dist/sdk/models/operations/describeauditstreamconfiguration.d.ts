import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeAuditStreamConfigurationRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the fleet.
     */
    fleetArn: string;
}
export declare class DescribeAuditStreamConfigurationRequest extends SpeakeasyBase {
    requestBody: DescribeAuditStreamConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAuditStreamConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAuditStreamConfigurationResponse?: shared.DescribeAuditStreamConfigurationResponse;
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
