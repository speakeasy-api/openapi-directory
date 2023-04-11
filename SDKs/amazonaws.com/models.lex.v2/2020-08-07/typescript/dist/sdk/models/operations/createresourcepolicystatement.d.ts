import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Determines whether the statement allows or denies access to the resource.
 */
export declare enum CreateResourcePolicyStatementRequestBodyEffectEnum {
    Allow = "Allow",
    Deny = "Deny"
}
export declare class CreateResourcePolicyStatementRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Lex action that this policy either allows or denies. The action must apply to the resource type of the specified ARN. For more information, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlexv2.html"> Actions, resources, and condition keys for Amazon Lex V2</a>.
     */
    action: string[];
    /**
     * <p>Specifies a condition when the policy is in effect. If the principal of the policy is a service principal, you must provide two condition blocks, one with a SourceAccount global condition key and one with a SourceArn global condition key.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM JSON policy elements: Condition </a>.</p>
     */
    condition?: Record<string, Record<string, string>>;
    /**
     * Determines whether the statement allows or denies access to the resource.
     */
    effect: CreateResourcePolicyStatementRequestBodyEffectEnum;
    /**
     * An IAM principal, such as an IAM users, IAM roles, or AWS services that is allowed or denied access to a resource. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">AWS JSON policy elements: Principal</a>.
     */
    principal: shared.Principal[];
    /**
     * The name of the statement. The ID is the same as the <code>Sid</code> IAM property. The statement name must be unique within the policy. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html">IAM JSON policy elements: Sid</a>.
     */
    statementId: string;
}
export declare class CreateResourcePolicyStatementRequest extends SpeakeasyBase {
    requestBody: CreateResourcePolicyStatementRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * <p>The identifier of the revision of the policy to edit. If this revision ID doesn't match the current revision ID, Amazon Lex throws an exception.</p> <p>If you don't specify a revision, Amazon Lex overwrites the contents of the policy with the new values.</p>
     */
    expectedRevisionId?: string;
    /**
     * The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
     */
    resourceArn: string;
}
export declare class CreateResourcePolicyStatementResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createResourcePolicyStatementResponse?: shared.CreateResourcePolicyStatementResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * PreconditionFailedException
     */
    preconditionFailedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
