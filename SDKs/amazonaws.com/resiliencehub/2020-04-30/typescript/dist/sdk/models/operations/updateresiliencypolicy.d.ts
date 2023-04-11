import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies a high-level geographical location constraint for where your resilience policy data can be stored.
 */
export declare enum UpdateResiliencyPolicyRequestBodyDataLocationConstraintEnum {
    AnyLocation = "AnyLocation",
    SameContinent = "SameContinent",
    SameCountry = "SameCountry"
}
/**
 * The tier for this resiliency policy, ranging from the highest severity (<code>MissionCritical</code>) to lowest (<code>NonCritical</code>).
 */
export declare enum UpdateResiliencyPolicyRequestBodyTierEnum {
    MissionCritical = "MissionCritical",
    Critical = "Critical",
    Important = "Important",
    CoreServices = "CoreServices",
    NonCritical = "NonCritical"
}
export declare class UpdateResiliencyPolicyRequestBody extends SpeakeasyBase {
    /**
     * Specifies a high-level geographical location constraint for where your resilience policy data can be stored.
     */
    dataLocationConstraint?: UpdateResiliencyPolicyRequestBodyDataLocationConstraintEnum;
    /**
     * The type of resiliency policy to be created, including the recovery time objective (RTO) and recovery point objective (RPO) in seconds.
     */
    policy?: Record<string, shared.FailurePolicy>;
    /**
     * The Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
     */
    policyArn: string;
    /**
     * The description for the policy.
     */
    policyDescription?: string;
    /**
     * The name of the policy
     */
    policyName?: string;
    /**
     * The tier for this resiliency policy, ranging from the highest severity (<code>MissionCritical</code>) to lowest (<code>NonCritical</code>).
     */
    tier?: UpdateResiliencyPolicyRequestBodyTierEnum;
}
export declare class UpdateResiliencyPolicyRequest extends SpeakeasyBase {
    requestBody: UpdateResiliencyPolicyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateResiliencyPolicyResponse extends SpeakeasyBase {
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateResiliencyPolicyResponse?: shared.UpdateResiliencyPolicyResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
