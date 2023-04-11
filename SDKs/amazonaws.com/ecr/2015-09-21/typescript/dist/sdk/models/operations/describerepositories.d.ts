import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRepositoriesXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921DescribeRepositories = "AmazonEC2ContainerRegistry_V20150921.DescribeRepositories"
}
export declare class DescribeRepositoriesRequest extends SpeakeasyBase {
    describeRepositoriesRequest: shared.DescribeRepositoriesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRepositoriesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeRepositoriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRepositoriesResponse?: shared.DescribeRepositoriesResponse;
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
}
