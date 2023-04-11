import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateCertificateAuthorityXAmzTargetEnum {
    ACMPrivateCAUpdateCertificateAuthority = "ACMPrivateCA.UpdateCertificateAuthority"
}
export declare class UpdateCertificateAuthorityRequest extends SpeakeasyBase {
    updateCertificateAuthorityRequest: shared.UpdateCertificateAuthorityRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCertificateAuthorityXAmzTargetEnum;
}
export declare class UpdateCertificateAuthorityResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InvalidArgsException
     */
    invalidArgsException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidPolicyException
     */
    invalidPolicyException?: any;
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
