import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteResourcePolicyRequestBody extends SpeakeasyBase {
    /**
     * The name of the resource policy to delete.
     */
    policyName: string;
    /**
     * Specifies a specific policy revision to delete. Provide a <code>PolicyRevisionId</code> to ensure an atomic delete operation. If the provided revision id does not match the latest policy revision id, an <code>InvalidPolicyRevisionIdException</code> exception is returned.
     */
    policyRevisionId?: string;
}
export declare class DeleteResourcePolicyRequest extends SpeakeasyBase {
    requestBody: DeleteResourcePolicyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteResourcePolicyResult?: Record<string, any>;
    /**
     * InvalidPolicyRevisionIdException
     */
    invalidPolicyRevisionIdException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
}
