import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateSecurityPolicyXAmzTargetEnum {
    OpenSearchServerlessUpdateSecurityPolicy = "OpenSearchServerless.UpdateSecurityPolicy"
}
export declare class UpdateSecurityPolicyRequest extends SpeakeasyBase {
    updateSecurityPolicyRequest: shared.UpdateSecurityPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSecurityPolicyXAmzTargetEnum;
}
export declare class UpdateSecurityPolicyResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateSecurityPolicyResponse?: shared.UpdateSecurityPolicyResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
