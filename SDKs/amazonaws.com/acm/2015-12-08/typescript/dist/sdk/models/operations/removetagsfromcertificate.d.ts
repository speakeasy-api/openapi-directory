import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RemoveTagsFromCertificateXAmzTargetEnum {
    CertificateManagerRemoveTagsFromCertificate = "CertificateManager.RemoveTagsFromCertificate"
}
export declare class RemoveTagsFromCertificateRequest extends SpeakeasyBase {
    removeTagsFromCertificateRequest: shared.RemoveTagsFromCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveTagsFromCertificateXAmzTargetEnum;
}
export declare class RemoveTagsFromCertificateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
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
     * TagPolicyException
     */
    tagPolicyException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
