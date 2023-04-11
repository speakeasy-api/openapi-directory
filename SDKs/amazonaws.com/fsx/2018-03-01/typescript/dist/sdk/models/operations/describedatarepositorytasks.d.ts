import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDataRepositoryTasksXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301DescribeDataRepositoryTasks = "AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks"
}
export declare class DescribeDataRepositoryTasksRequest extends SpeakeasyBase {
    describeDataRepositoryTasksRequest: shared.DescribeDataRepositoryTasksRequest;
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
    xAmzTarget: DescribeDataRepositoryTasksXAmzTargetEnum;
}
export declare class DescribeDataRepositoryTasksResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * DataRepositoryTaskNotFound
     */
    dataRepositoryTaskNotFound?: any;
    /**
     * Success
     */
    describeDataRepositoryTasksResponse?: shared.DescribeDataRepositoryTasksResponse;
    /**
     * FileSystemNotFound
     */
    fileSystemNotFound?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
