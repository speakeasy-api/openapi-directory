import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPipelinesXAmzTargetEnum {
    SageMakerListPipelines = "SageMaker.ListPipelines"
}
export declare class ListPipelinesRequest extends SpeakeasyBase {
    listPipelinesRequest: shared.ListPipelinesRequest;
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
    xAmzTarget: ListPipelinesXAmzTargetEnum;
}
export declare class ListPipelinesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listPipelinesResponse?: shared.ListPipelinesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
