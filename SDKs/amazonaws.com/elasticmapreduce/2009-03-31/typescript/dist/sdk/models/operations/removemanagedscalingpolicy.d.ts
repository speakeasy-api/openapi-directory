import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RemoveManagedScalingPolicyXAmzTargetEnum {
    ElasticMapReduceRemoveManagedScalingPolicy = "ElasticMapReduce.RemoveManagedScalingPolicy"
}
export declare class RemoveManagedScalingPolicyRequest extends SpeakeasyBase {
    removeManagedScalingPolicyInput: shared.RemoveManagedScalingPolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveManagedScalingPolicyXAmzTargetEnum;
}
export declare class RemoveManagedScalingPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    removeManagedScalingPolicyOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
