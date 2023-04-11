import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies a high-level geographical location constraint for where your resilience policy data can be stored.
 */
export declare enum CreateResiliencyPolicyRequestBodyDataLocationConstraintEnum {
    AnyLocation = "AnyLocation",
    SameContinent = "SameContinent",
    SameCountry = "SameCountry"
}
/**
 * The tier for this resiliency policy, ranging from the highest severity (<code>MissionCritical</code>) to lowest (<code>NonCritical</code>).
 */
export declare enum CreateResiliencyPolicyRequestBodyTierEnum {
    MissionCritical = "MissionCritical",
    Critical = "Critical",
    Important = "Important",
    CoreServices = "CoreServices",
    NonCritical = "NonCritical"
}
export declare class CreateResiliencyPolicyRequestBody extends SpeakeasyBase {
    /**
     * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
     */
    clientToken?: string;
    /**
     * Specifies a high-level geographical location constraint for where your resilience policy data can be stored.
     */
    dataLocationConstraint?: CreateResiliencyPolicyRequestBodyDataLocationConstraintEnum;
    /**
     * The type of resiliency policy to be created, including the recovery time objective (RTO) and recovery point objective (RPO) in seconds.
     */
    policy: Record<string, shared.FailurePolicy>;
    /**
     * The description for the policy.
     */
    policyDescription?: string;
    /**
     * The name of the policy
     */
    policyName: string;
    /**
     * The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair.
     */
    tags?: Record<string, string>;
    /**
     * The tier for this resiliency policy, ranging from the highest severity (<code>MissionCritical</code>) to lowest (<code>NonCritical</code>).
     */
    tier: CreateResiliencyPolicyRequestBodyTierEnum;
}
export declare class CreateResiliencyPolicyRequest extends SpeakeasyBase {
    requestBody: CreateResiliencyPolicyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateResiliencyPolicyResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createResiliencyPolicyResponse?: shared.CreateResiliencyPolicyResponse;
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
