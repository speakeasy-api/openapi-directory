import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RunJobFlowXAmzTargetEnum {
    ElasticMapReduceRunJobFlow = "ElasticMapReduce.RunJobFlow"
}
export declare class RunJobFlowRequest extends SpeakeasyBase {
    runJobFlowInput: shared.RunJobFlowInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RunJobFlowXAmzTargetEnum;
}
export declare class RunJobFlowResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    runJobFlowOutput?: shared.RunJobFlowOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
