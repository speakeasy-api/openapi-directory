import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFileSystemsXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301DescribeFileSystems = "AWSSimbaAPIService_v20180301.DescribeFileSystems"
}
export declare class DescribeFileSystemsRequest extends SpeakeasyBase {
    describeFileSystemsRequest: shared.DescribeFileSystemsRequest;
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
    xAmzTarget: DescribeFileSystemsXAmzTargetEnum;
}
export declare class DescribeFileSystemsResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    describeFileSystemsResponse?: shared.DescribeFileSystemsResponse;
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
