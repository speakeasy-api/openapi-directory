import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCertificateXAmzTargetEnum {
    TransferServiceDescribeCertificate = "TransferService.DescribeCertificate"
}
export declare class DescribeCertificateRequest extends SpeakeasyBase {
    describeCertificateRequest: shared.DescribeCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCertificateXAmzTargetEnum;
}
export declare class DescribeCertificateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeCertificateResponse?: shared.DescribeCertificateResponse;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
