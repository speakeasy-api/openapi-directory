import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeWebsiteCertificateAuthorityRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the fleet.
     */
    fleetArn: string;
    /**
     * A unique identifier for the certificate authority.
     */
    websiteCaId: string;
}
export declare class DescribeWebsiteCertificateAuthorityRequest extends SpeakeasyBase {
    requestBody: DescribeWebsiteCertificateAuthorityRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeWebsiteCertificateAuthorityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeWebsiteCertificateAuthorityResponse?: shared.DescribeWebsiteCertificateAuthorityResponse;
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
