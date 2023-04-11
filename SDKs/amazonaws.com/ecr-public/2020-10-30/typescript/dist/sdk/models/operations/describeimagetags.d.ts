import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeImageTagsXAmzTargetEnum {
    SpencerFrontendServiceDescribeImageTags = "SpencerFrontendService.DescribeImageTags"
}
export declare class DescribeImageTagsRequest extends SpeakeasyBase {
    describeImageTagsRequest: shared.DescribeImageTagsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeImageTagsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeImageTagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeImageTagsResponse?: shared.DescribeImageTagsResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * RepositoryNotFoundException
     */
    repositoryNotFoundException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedCommandException
     */
    unsupportedCommandException?: any;
}
