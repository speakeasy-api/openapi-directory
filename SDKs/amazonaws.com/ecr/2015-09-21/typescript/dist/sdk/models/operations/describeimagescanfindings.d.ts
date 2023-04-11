import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeImageScanFindingsXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921DescribeImageScanFindings = "AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings"
}
export declare class DescribeImageScanFindingsRequest extends SpeakeasyBase {
    describeImageScanFindingsRequest: shared.DescribeImageScanFindingsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeImageScanFindingsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeImageScanFindingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeImageScanFindingsResponse?: shared.DescribeImageScanFindingsResponse;
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
     * ScanNotFoundException
     */
    scanNotFoundException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
