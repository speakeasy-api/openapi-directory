import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListActionExecutionsXAmzTargetEnum {
    CodePipeline20150709ListActionExecutions = "CodePipeline_20150709.ListActionExecutions"
}
export declare class ListActionExecutionsRequest extends SpeakeasyBase {
    listActionExecutionsInput: shared.ListActionExecutionsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListActionExecutionsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListActionExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listActionExecutionsOutput?: shared.ListActionExecutionsOutput;
    /**
     * PipelineExecutionNotFoundException
     */
    pipelineExecutionNotFoundException?: any;
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
