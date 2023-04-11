import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeClusterXAmzTargetEnum {
    ElasticMapReduceDescribeCluster = "ElasticMapReduce.DescribeCluster"
}
export declare class DescribeClusterRequest extends SpeakeasyBase {
    describeClusterInput: shared.DescribeClusterInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeClusterXAmzTargetEnum;
}
export declare class DescribeClusterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeClusterOutput?: shared.DescribeClusterOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
