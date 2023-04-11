import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartNotebookExecutionXAmzTargetEnum {
    ElasticMapReduceStartNotebookExecution = "ElasticMapReduce.StartNotebookExecution"
}
export declare class StartNotebookExecutionRequest extends SpeakeasyBase {
    startNotebookExecutionInput: shared.StartNotebookExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartNotebookExecutionXAmzTargetEnum;
}
export declare class StartNotebookExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    startNotebookExecutionOutput?: shared.StartNotebookExecutionOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
