import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeOrganizationConfigurationRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the organization behavior graph.
     */
    graphArn: string;
}
export declare class DescribeOrganizationConfigurationRequest extends SpeakeasyBase {
    requestBody: DescribeOrganizationConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeOrganizationConfigurationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeOrganizationConfigurationResponse?: shared.DescribeOrganizationConfigurationResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
