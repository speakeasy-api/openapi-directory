import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFileCachesXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301DescribeFileCaches = "AWSSimbaAPIService_v20180301.DescribeFileCaches"
}
export declare class DescribeFileCachesRequest extends SpeakeasyBase {
    describeFileCachesRequest: shared.DescribeFileCachesRequest;
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
    xAmzTarget: DescribeFileCachesXAmzTargetEnum;
}
export declare class DescribeFileCachesResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    describeFileCachesResponse?: shared.DescribeFileCachesResponse;
    /**
     * FileCacheNotFound
     */
    fileCacheNotFound?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
