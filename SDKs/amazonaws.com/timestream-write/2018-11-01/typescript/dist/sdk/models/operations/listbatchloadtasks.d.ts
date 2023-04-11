import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListBatchLoadTasksXAmzTargetEnum {
    Timestream20181101ListBatchLoadTasks = "Timestream_20181101.ListBatchLoadTasks"
}
export declare class ListBatchLoadTasksRequest extends SpeakeasyBase {
    listBatchLoadTasksRequest: shared.ListBatchLoadTasksRequest;
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
    xAmzTarget: ListBatchLoadTasksXAmzTargetEnum;
}
export declare class ListBatchLoadTasksResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidEndpointException
     */
    invalidEndpointException?: any;
    /**
     * Success
     */
    listBatchLoadTasksResponse?: shared.ListBatchLoadTasksResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
