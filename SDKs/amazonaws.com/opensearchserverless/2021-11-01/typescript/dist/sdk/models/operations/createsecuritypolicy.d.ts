import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateSecurityPolicyXAmzTargetEnum {
    OpenSearchServerlessCreateSecurityPolicy = "OpenSearchServerless.CreateSecurityPolicy"
}
export declare class CreateSecurityPolicyRequest extends SpeakeasyBase {
    createSecurityPolicyRequest: shared.CreateSecurityPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSecurityPolicyXAmzTargetEnum;
}
export declare class CreateSecurityPolicyResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createSecurityPolicyResponse?: shared.CreateSecurityPolicyResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
