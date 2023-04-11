import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPipelineExecutionsXAmzTargetEnum {
    SageMakerListPipelineExecutions = "SageMaker.ListPipelineExecutions"
}
export declare class ListPipelineExecutionsRequest extends SpeakeasyBase {
    listPipelineExecutionsRequest: shared.ListPipelineExecutionsRequest;
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
    xAmzTarget: ListPipelineExecutionsXAmzTargetEnum;
}
export declare class ListPipelineExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listPipelineExecutionsResponse?: shared.ListPipelineExecutionsResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
