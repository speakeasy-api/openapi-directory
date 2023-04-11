import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RemoveAutoScalingPolicyXAmzTargetEnum {
    ElasticMapReduceRemoveAutoScalingPolicy = "ElasticMapReduce.RemoveAutoScalingPolicy"
}
export declare class RemoveAutoScalingPolicyRequest extends SpeakeasyBase {
    removeAutoScalingPolicyInput: shared.RemoveAutoScalingPolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveAutoScalingPolicyXAmzTargetEnum;
}
export declare class RemoveAutoScalingPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    removeAutoScalingPolicyOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
