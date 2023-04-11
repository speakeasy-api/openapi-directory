import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePolicyVersionRequestBody extends SpeakeasyBase {
    /**
     * The JSON document that describes the policy. Minimum length of 1. Maximum length of 2048, excluding whitespace.
     */
    policyDocument: string;
}
export declare class CreatePolicyVersionRequest extends SpeakeasyBase {
    requestBody: CreatePolicyVersionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The policy name.
     */
    policyName: string;
    /**
     * Specifies whether the policy version is set as the default. When this parameter is true, the new policy version becomes the operative version (that is, the version that is in effect for the certificates to which the policy is attached).
     */
    setAsDefault?: boolean;
}
export declare class CreatePolicyVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createPolicyVersionResponse?: shared.CreatePolicyVersionResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * MalformedPolicyException
     */
    malformedPolicyException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * VersionsLimitExceededException
     */
    versionsLimitExceededException?: any;
}
