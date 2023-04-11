import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UntagCertificateAuthorityXAmzTargetEnum {
    ACMPrivateCAUntagCertificateAuthority = "ACMPrivateCA.UntagCertificateAuthority"
}
export declare class UntagCertificateAuthorityRequest extends SpeakeasyBase {
    untagCertificateAuthorityRequest: shared.UntagCertificateAuthorityRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagCertificateAuthorityXAmzTargetEnum;
}
export declare class UntagCertificateAuthorityResponse extends SpeakeasyBase {
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
     * InvalidTagException
     */
    invalidTagException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
