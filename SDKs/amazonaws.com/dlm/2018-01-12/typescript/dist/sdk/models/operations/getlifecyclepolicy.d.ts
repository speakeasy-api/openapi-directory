import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLifecyclePolicyRequest extends SpeakeasyBase {
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
export declare class GetLifecyclePolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getLifecyclePolicyResponse?: shared.GetLifecyclePolicyResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
