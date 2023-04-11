import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RejectCertificateTransferRequestBody extends SpeakeasyBase {
    /**
     * The reason the certificate transfer was rejected.
     */
    rejectReason?: string;
}
export declare class RejectCertificateTransferRequest extends SpeakeasyBase {
    requestBody: RejectCertificateTransferRequestBody;
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
}
export declare class RejectCertificateTransferResponse extends SpeakeasyBase {
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
