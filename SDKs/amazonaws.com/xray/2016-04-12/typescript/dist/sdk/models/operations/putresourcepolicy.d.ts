import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutResourcePolicyRequestBody extends SpeakeasyBase {
    /**
     * <p>A flag to indicate whether to bypass the resource policy lockout safety check.</p> <important> <p>Setting this value to true increases the risk that the policy becomes unmanageable. Do not set this value to true indiscriminately.</p> </important> <p>Use this parameter only when you include a policy in the request and you intend to prevent the principal that is making the request from making a subsequent <code>PutResourcePolicy</code> request.</p> <p>The default value is false.</p>
     */
    bypassPolicyLockoutCheck?: boolean;
    /**
     * The resource policy document, which can be up to 5kb in size.
     */
    policyDocument: string;
    /**
     * The name of the resource policy. Must be unique within a specific Amazon Web Services account.
     */
    policyName: string;
    /**
     * <p>Specifies a specific policy revision, to ensure an atomic create operation. By default the resource policy is created if it does not exist, or updated with an incremented revision id. The revision id is unique to each policy in the account.</p> <p>If the policy revision id does not match the latest revision id, the operation will fail with an <code>InvalidPolicyRevisionIdException</code> exception. You can also provide a <code>PolicyRevisionId</code> of 0. In this case, the operation will fail with an <code>InvalidPolicyRevisionIdException</code> exception if a resource policy with the same name already exists. </p>
     */
    policyRevisionId?: string;
}
export declare class PutResourcePolicyRequest extends SpeakeasyBase {
    requestBody: PutResourcePolicyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidPolicyRevisionIdException
     */
    invalidPolicyRevisionIdException?: any;
    /**
     * LockoutPreventionException
     */
    lockoutPreventionException?: any;
    /**
     * MalformedPolicyDocumentException
     */
    malformedPolicyDocumentException?: any;
    /**
     * PolicyCountLimitExceededException
     */
    policyCountLimitExceededException?: any;
    /**
     * PolicySizeLimitExceededException
     */
    policySizeLimitExceededException?: any;
    /**
     * Success
     */
    putResourcePolicyResult?: shared.PutResourcePolicyResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
}
