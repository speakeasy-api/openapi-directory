import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateAccessPolicyXAmzTargetEnum {
    OpenSearchServerlessUpdateAccessPolicy = "OpenSearchServerless.UpdateAccessPolicy"
}
export declare class UpdateAccessPolicyRequest extends SpeakeasyBase {
    updateAccessPolicyRequest: shared.UpdateAccessPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAccessPolicyXAmzTargetEnum;
}
export declare class UpdateAccessPolicyResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateAccessPolicyResponse?: shared.UpdateAccessPolicyResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
