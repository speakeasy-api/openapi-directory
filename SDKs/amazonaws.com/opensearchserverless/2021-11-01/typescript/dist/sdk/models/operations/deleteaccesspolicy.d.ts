import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAccessPolicyXAmzTargetEnum {
    OpenSearchServerlessDeleteAccessPolicy = "OpenSearchServerless.DeleteAccessPolicy"
}
export declare class DeleteAccessPolicyRequest extends SpeakeasyBase {
    deleteAccessPolicyRequest: shared.DeleteAccessPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAccessPolicyXAmzTargetEnum;
}
export declare class DeleteAccessPolicyResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteAccessPolicyResponse?: Record<string, any>;
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
