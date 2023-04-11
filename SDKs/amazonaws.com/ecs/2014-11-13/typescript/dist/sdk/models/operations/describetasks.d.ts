import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTasksXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DescribeTasks = "AmazonEC2ContainerServiceV20141113.DescribeTasks"
}
export declare class DescribeTasksRequest extends SpeakeasyBase {
    describeTasksRequest: shared.DescribeTasksRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTasksXAmzTargetEnum;
}
export declare class DescribeTasksResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    /**
     * ClusterNotFoundException
     */
    clusterNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    describeTasksResponse?: shared.DescribeTasksResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
