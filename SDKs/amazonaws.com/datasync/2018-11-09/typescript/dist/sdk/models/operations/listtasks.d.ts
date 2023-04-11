import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTasksXAmzTargetEnum {
    FmrsServiceListTasks = "FmrsService.ListTasks"
}
export declare class ListTasksRequest extends SpeakeasyBase {
    listTasksRequest: shared.ListTasksRequest;
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
    xAmzTarget: ListTasksXAmzTargetEnum;
}
export declare class ListTasksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listTasksResponse?: shared.ListTasksResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
