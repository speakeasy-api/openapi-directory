import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TerminateJobFlowsXAmzTargetEnum {
    ElasticMapReduceTerminateJobFlows = "ElasticMapReduce.TerminateJobFlows"
}
export declare class TerminateJobFlowsRequest extends SpeakeasyBase {
    terminateJobFlowsInput: shared.TerminateJobFlowsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TerminateJobFlowsXAmzTargetEnum;
}
export declare class TerminateJobFlowsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
