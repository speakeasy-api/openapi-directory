import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopNotebookExecutionXAmzTargetEnum {
    ElasticMapReduceStopNotebookExecution = "ElasticMapReduce.StopNotebookExecution"
}
export declare class StopNotebookExecutionRequest extends SpeakeasyBase {
    stopNotebookExecutionInput: shared.StopNotebookExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopNotebookExecutionXAmzTargetEnum;
}
export declare class StopNotebookExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
