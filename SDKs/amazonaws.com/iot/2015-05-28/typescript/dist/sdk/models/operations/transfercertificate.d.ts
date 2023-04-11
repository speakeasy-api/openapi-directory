import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TransferCertificateRequestBody extends SpeakeasyBase {
    /**
     * The transfer message.
     */
    transferMessage?: string;
}
export declare class TransferCertificateRequest extends SpeakeasyBase {
    requestBody: TransferCertificateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
     */
    certificateId: string;
    /**
     * The Amazon Web Services account.
     */
    targetAwsAccount: string;
}
export declare class TransferCertificateResponse extends SpeakeasyBase {
    /**
     * CertificateStateException
     */
    certificateStateException?: any;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    transferCertificateResponse?: shared.TransferCertificateResponse;
    /**
     * TransferConflictException
     */
    transferConflictException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
