import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RenewCertificateXAmzTargetEnum {
    CertificateManagerRenewCertificate = "CertificateManager.RenewCertificate"
}
export declare class RenewCertificateRequest extends SpeakeasyBase {
    renewCertificateRequest: shared.RenewCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RenewCertificateXAmzTargetEnum;
}
export declare class RenewCertificateResponse extends SpeakeasyBase {
    contentType: string;
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
