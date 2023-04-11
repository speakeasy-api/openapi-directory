import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AcceptCertificateTransferRequest extends SpeakeasyBase {
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
     * Specifies whether the certificate is active.
     */
    setAsActive?: boolean;
}
export declare class AcceptCertificateTransferResponse extends SpeakeasyBase {
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
     * TransferAlreadyCompletedException
     */
    transferAlreadyCompletedException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
