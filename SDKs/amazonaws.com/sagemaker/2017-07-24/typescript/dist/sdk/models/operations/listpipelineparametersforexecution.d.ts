import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPipelineParametersForExecutionXAmzTargetEnum {
    SageMakerListPipelineParametersForExecution = "SageMaker.ListPipelineParametersForExecution"
}
export declare class ListPipelineParametersForExecutionRequest extends SpeakeasyBase {
    listPipelineParametersForExecutionRequest: shared.ListPipelineParametersForExecutionRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPipelineParametersForExecutionXAmzTargetEnum;
}
export declare class ListPipelineParametersForExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listPipelineParametersForExecutionResponse?: shared.ListPipelineParametersForExecutionResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
