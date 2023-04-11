import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RemoveAutoTerminationPolicyXAmzTargetEnum {
    ElasticMapReduceRemoveAutoTerminationPolicy = "ElasticMapReduce.RemoveAutoTerminationPolicy"
}
export declare class RemoveAutoTerminationPolicyRequest extends SpeakeasyBase {
    removeAutoTerminationPolicyInput: shared.RemoveAutoTerminationPolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveAutoTerminationPolicyXAmzTargetEnum;
}
export declare class RemoveAutoTerminationPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    removeAutoTerminationPolicyOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
