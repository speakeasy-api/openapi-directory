import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The activation state.
 */
export declare enum GetLifecyclePoliciesStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Error = "ERROR"
}
export declare class GetLifecyclePoliciesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifiers of the data lifecycle policies.
     */
    policyIds?: string[];
    /**
     * The resource type.
     */
    resourceTypes?: shared.ResourceTypeValuesEnum[];
    /**
     * The activation state.
     */
    state?: GetLifecyclePoliciesStateEnum;
    /**
     * <p>The tags to add to objects created by the policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p> <p>These user-defined tags are added in addition to the Amazon Web Services-added lifecycle tags.</p>
     */
    tagsToAdd?: string[];
    /**
     * <p>The target tag for a policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p>
     */
    targetTags?: string[];
}
export declare class GetLifecyclePoliciesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getLifecyclePoliciesResponse?: shared.GetLifecyclePoliciesResponse;
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
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
