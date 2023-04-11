import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPipelineExecutionStepsXAmzTargetEnum {
    SageMakerListPipelineExecutionSteps = "SageMaker.ListPipelineExecutionSteps"
}
export declare class ListPipelineExecutionStepsRequest extends SpeakeasyBase {
    listPipelineExecutionStepsRequest: shared.ListPipelineExecutionStepsRequest;
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
    xAmzTarget: ListPipelineExecutionStepsXAmzTargetEnum;
}
export declare class ListPipelineExecutionStepsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listPipelineExecutionStepsResponse?: shared.ListPipelineExecutionStepsResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
