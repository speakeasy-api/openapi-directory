import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutManagedScalingPolicyXAmzTargetEnum {
    ElasticMapReducePutManagedScalingPolicy = "ElasticMapReduce.PutManagedScalingPolicy"
}
export declare class PutManagedScalingPolicyRequest extends SpeakeasyBase {
    putManagedScalingPolicyInput: shared.PutManagedScalingPolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutManagedScalingPolicyXAmzTargetEnum;
}
export declare class PutManagedScalingPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    putManagedScalingPolicyOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
