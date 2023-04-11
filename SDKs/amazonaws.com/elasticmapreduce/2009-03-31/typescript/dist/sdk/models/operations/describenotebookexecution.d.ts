import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeNotebookExecutionXAmzTargetEnum {
    ElasticMapReduceDescribeNotebookExecution = "ElasticMapReduce.DescribeNotebookExecution"
}
export declare class DescribeNotebookExecutionRequest extends SpeakeasyBase {
    describeNotebookExecutionInput: shared.DescribeNotebookExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeNotebookExecutionXAmzTargetEnum;
}
export declare class DescribeNotebookExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeNotebookExecutionOutput?: shared.DescribeNotebookExecutionOutput;
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
