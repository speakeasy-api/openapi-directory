import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteSecurityPolicyXAmzTargetEnum {
    OpenSearchServerlessDeleteSecurityPolicy = "OpenSearchServerless.DeleteSecurityPolicy"
}
export declare class DeleteSecurityPolicyRequest extends SpeakeasyBase {
    deleteSecurityPolicyRequest: shared.DeleteSecurityPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSecurityPolicyXAmzTargetEnum;
}
export declare class DeleteSecurityPolicyResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteSecurityPolicyResponse?: Record<string, any>;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
