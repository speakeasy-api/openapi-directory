import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCertificateXAmzTargetEnum {
    CertificateManagerDescribeCertificate = "CertificateManager.DescribeCertificate"
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
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
