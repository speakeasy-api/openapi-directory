import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TagCertificateAuthorityXAmzTargetEnum {
    ACMPrivateCATagCertificateAuthority = "ACMPrivateCA.TagCertificateAuthority"
}
export declare class TagCertificateAuthorityRequest extends SpeakeasyBase {
    tagCertificateAuthorityRequest: shared.TagCertificateAuthorityRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagCertificateAuthorityXAmzTargetEnum;
}
export declare class TagCertificateAuthorityResponse extends SpeakeasyBase {
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
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}
