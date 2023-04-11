import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  <b>[All policy types]</b> Specifies the configuration of a lifecycle policy.
 */
export declare class CreateLifecyclePolicyRequestBodyPolicyDetails extends SpeakeasyBase {
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
export declare enum CreateLifecyclePolicyRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class CreateLifecyclePolicyRequestBody extends SpeakeasyBase {
    /**
     * A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.
     */
    description: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
     */
    executionRoleArn: string;
    /**
     *  <b>[All policy types]</b> Specifies the configuration of a lifecycle policy.
     */
    policyDetails: CreateLifecyclePolicyRequestBodyPolicyDetails;
    /**
     * The desired activation state of the lifecycle policy after creation.
     */
    state: CreateLifecyclePolicyRequestBodyStateEnum;
    /**
     * The tags to apply to the lifecycle policy during creation.
     */
    tags?: Record<string, string>;
}
export declare class CreateLifecyclePolicyRequest extends SpeakeasyBase {
    requestBody: CreateLifecyclePolicyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateLifecyclePolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createLifecyclePolicyResponse?: shared.CreateLifecyclePolicyResponse;
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
}
