import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  <b>[All policy types]</b> Specifies the configuration of a lifecycle policy.
 */
export declare class UpdateLifecyclePolicyRequestBodyPolicyDetails extends SpeakeasyBase {
    actions?: shared.Action[];
    eventSource?: shared.EventSource;
    parameters?: shared.ParametersT;
    policyType?: shared.PolicyTypeValuesEnum;
    resourceLocations?: shared.ResourceLocationValuesEnum[];
    resourceTypes?: shared.ResourceTypeValuesEnum[];
    schedules?: shared.Schedule[];
    targetTags?: shared.Tag[];
}
/**
 * The desired activation state of the lifecycle policy after creation.
 */
export declare enum UpdateLifecyclePolicyRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class UpdateLifecyclePolicyRequestBody extends SpeakeasyBase {
    /**
     * A description of the lifecycle policy.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
     */
    executionRoleArn?: string;
    /**
     *  <b>[All policy types]</b> Specifies the configuration of a lifecycle policy.
     */
    policyDetails?: UpdateLifecyclePolicyRequestBodyPolicyDetails;
    /**
     * The desired activation state of the lifecycle policy after creation.
     */
    state?: UpdateLifecyclePolicyRequestBodyStateEnum;
}
export declare class UpdateLifecyclePolicyRequest extends SpeakeasyBase {
    requestBody: UpdateLifecyclePolicyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the lifecycle policy.
     */
    policyId: string;
}
export declare class UpdateLifecyclePolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateLifecyclePolicyResponse?: Record<string, any>;
}
