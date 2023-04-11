import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCertificateFromCsrRequestBody extends SpeakeasyBase {
    /**
     * The certificate signing request (CSR).
     */
    certificateSigningRequest: string;
}
export declare class CreateCertificateFromCsrRequest extends SpeakeasyBase {
    requestBody: CreateCertificateFromCsrRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Specifies whether the certificate is active.
     */
    setAsActive?: boolean;
}
export declare class CreateCertificateFromCsrResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createCertificateFromCsrResponse?: shared.CreateCertificateFromCsrResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
