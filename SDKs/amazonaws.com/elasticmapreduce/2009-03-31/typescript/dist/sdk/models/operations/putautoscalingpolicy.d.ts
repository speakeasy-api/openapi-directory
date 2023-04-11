import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutAutoScalingPolicyXAmzTargetEnum {
    ElasticMapReducePutAutoScalingPolicy = "ElasticMapReduce.PutAutoScalingPolicy"
}
export declare class PutAutoScalingPolicyRequest extends SpeakeasyBase {
    putAutoScalingPolicyInput: shared.PutAutoScalingPolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAutoScalingPolicyXAmzTargetEnum;
}
export declare class PutAutoScalingPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    putAutoScalingPolicyOutput?: shared.PutAutoScalingPolicyOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
