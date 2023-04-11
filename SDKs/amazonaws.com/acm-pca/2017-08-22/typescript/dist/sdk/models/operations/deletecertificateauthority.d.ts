import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteCertificateAuthorityXAmzTargetEnum {
    ACMPrivateCADeleteCertificateAuthority = "ACMPrivateCA.DeleteCertificateAuthority"
}
export declare class DeleteCertificateAuthorityRequest extends SpeakeasyBase {
    deleteCertificateAuthorityRequest: shared.DeleteCertificateAuthorityRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCertificateAuthorityXAmzTargetEnum;
}
export declare class DeleteCertificateAuthorityResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
