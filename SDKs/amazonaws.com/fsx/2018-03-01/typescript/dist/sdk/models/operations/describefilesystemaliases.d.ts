import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFileSystemAliasesXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301DescribeFileSystemAliases = "AWSSimbaAPIService_v20180301.DescribeFileSystemAliases"
}
export declare class DescribeFileSystemAliasesRequest extends SpeakeasyBase {
    describeFileSystemAliasesRequest: shared.DescribeFileSystemAliasesRequest;
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
    xAmzTarget: DescribeFileSystemAliasesXAmzTargetEnum;
}
export declare class DescribeFileSystemAliasesResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    describeFileSystemAliasesResponse?: shared.DescribeFileSystemAliasesResponse;
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
