import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAutoTerminationPolicyXAmzTargetEnum {
    ElasticMapReduceGetAutoTerminationPolicy = "ElasticMapReduce.GetAutoTerminationPolicy"
}
export declare class GetAutoTerminationPolicyRequest extends SpeakeasyBase {
    getAutoTerminationPolicyInput: shared.GetAutoTerminationPolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAutoTerminationPolicyXAmzTargetEnum;
}
export declare class GetAutoTerminationPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAutoTerminationPolicyOutput?: shared.GetAutoTerminationPolicyOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
