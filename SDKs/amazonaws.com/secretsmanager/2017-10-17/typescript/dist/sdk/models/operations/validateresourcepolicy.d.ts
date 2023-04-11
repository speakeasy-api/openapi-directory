import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ValidateResourcePolicyXAmzTargetEnum {
    SecretsmanagerValidateResourcePolicy = "secretsmanager.ValidateResourcePolicy"
}
export declare class ValidateResourcePolicyRequest extends SpeakeasyBase {
    validateResourcePolicyRequest: shared.ValidateResourcePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ValidateResourcePolicyXAmzTargetEnum;
}
export declare class ValidateResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * MalformedPolicyDocumentException
     */
    malformedPolicyDocumentException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    validateResourcePolicyResponse?: shared.ValidateResourcePolicyResponse;
}
