import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddTagsToCertificateXAmzTargetEnum {
    CertificateManagerAddTagsToCertificate = "CertificateManager.AddTagsToCertificate"
}
export declare class AddTagsToCertificateRequest extends SpeakeasyBase {
    addTagsToCertificateRequest: shared.AddTagsToCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddTagsToCertificateXAmzTargetEnum;
}
export declare class AddTagsToCertificateResponse extends SpeakeasyBase {
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
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}
