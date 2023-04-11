import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutAutoTerminationPolicyXAmzTargetEnum {
    ElasticMapReducePutAutoTerminationPolicy = "ElasticMapReduce.PutAutoTerminationPolicy"
}
export declare class PutAutoTerminationPolicyRequest extends SpeakeasyBase {
    putAutoTerminationPolicyInput: shared.PutAutoTerminationPolicyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAutoTerminationPolicyXAmzTargetEnum;
}
export declare class PutAutoTerminationPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    putAutoTerminationPolicyOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
