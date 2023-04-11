import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetManagedScalingPolicyXAmzTargetEnum {
    ElasticMapReduceGetManagedScalingPolicy = "ElasticMapReduce.GetManagedScalingPolicy"
}
export declare class GetManagedScalingPolicyRequest extends SpeakeasyBase {
    getManagedScalingPolicyInput: shared.GetManagedScalingPolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetManagedScalingPolicyXAmzTargetEnum;
}
export declare class GetManagedScalingPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getManagedScalingPolicyOutput?: shared.GetManagedScalingPolicyOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
