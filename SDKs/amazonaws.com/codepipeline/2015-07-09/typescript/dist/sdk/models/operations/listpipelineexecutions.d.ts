import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPipelineExecutionsXAmzTargetEnum {
    CodePipeline20150709ListPipelineExecutions = "CodePipeline_20150709.ListPipelineExecutions"
}
export declare class ListPipelineExecutionsRequest extends SpeakeasyBase {
    listPipelineExecutionsInput: shared.ListPipelineExecutionsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPipelineExecutionsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListPipelineExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listPipelineExecutionsOutput?: shared.ListPipelineExecutionsOutput;
    /**
     * PipelineNotFoundException
     */
    pipelineNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
