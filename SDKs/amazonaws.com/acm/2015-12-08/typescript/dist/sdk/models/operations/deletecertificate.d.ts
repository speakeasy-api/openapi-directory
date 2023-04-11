import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteCertificateXAmzTargetEnum {
    CertificateManagerDeleteCertificate = "CertificateManager.DeleteCertificate"
}
export declare class DeleteCertificateRequest extends SpeakeasyBase {
    deleteCertificateRequest: shared.DeleteCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCertificateXAmzTargetEnum;
}
export declare class DeleteCertificateResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
