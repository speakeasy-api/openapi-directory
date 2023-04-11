import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RestoreCertificateAuthorityXAmzTargetEnum {
    ACMPrivateCARestoreCertificateAuthority = "ACMPrivateCA.RestoreCertificateAuthority"
}
export declare class RestoreCertificateAuthorityRequest extends SpeakeasyBase {
    restoreCertificateAuthorityRequest: shared.RestoreCertificateAuthorityRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreCertificateAuthorityXAmzTargetEnum;
}
export declare class RestoreCertificateAuthorityResponse extends SpeakeasyBase {
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
