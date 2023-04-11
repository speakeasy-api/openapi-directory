import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeImagesXAmzTargetEnum {
    SpencerFrontendServiceDescribeImages = "SpencerFrontendService.DescribeImages"
}
export declare class DescribeImagesRequest extends SpeakeasyBase {
    describeImagesRequest: shared.DescribeImagesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeImagesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeImagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeImagesResponse?: shared.DescribeImagesResponse;
    /**
     * ImageNotFoundException
     */
    imageNotFoundException?: any;
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
