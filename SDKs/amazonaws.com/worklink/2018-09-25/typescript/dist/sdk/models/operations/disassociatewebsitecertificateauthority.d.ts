import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DisassociateWebsiteCertificateAuthorityRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the fleet.
     */
    fleetArn: string;
    /**
     * A unique identifier for the CA.
     */
    websiteCaId: string;
}
export declare class DisassociateWebsiteCertificateAuthorityRequest extends SpeakeasyBase {
    requestBody: DisassociateWebsiteCertificateAuthorityRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateWebsiteCertificateAuthorityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateWebsiteCertificateAuthorityResponse?: Record<string, any>;
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
