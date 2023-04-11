import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateCertificateAuthorityXAmzTargetEnum {
    ACMPrivateCACreateCertificateAuthority = "ACMPrivateCA.CreateCertificateAuthority"
}
export declare class CreateCertificateAuthorityRequest extends SpeakeasyBase {
    createCertificateAuthorityRequest: shared.CreateCertificateAuthorityRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCertificateAuthorityXAmzTargetEnum;
}
export declare class CreateCertificateAuthorityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createCertificateAuthorityResponse?: shared.CreateCertificateAuthorityResponse;
    /**
     * InvalidArgsException
     */
    invalidArgsException?: any;
    /**
     * InvalidPolicyException
     */
    invalidPolicyException?: any;
    /**
     * InvalidTagException
     */
    invalidTagException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
