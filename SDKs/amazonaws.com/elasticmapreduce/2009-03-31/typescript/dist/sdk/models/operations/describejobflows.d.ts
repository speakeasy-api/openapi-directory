import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeJobFlowsXAmzTargetEnum {
    ElasticMapReduceDescribeJobFlows = "ElasticMapReduce.DescribeJobFlows"
}
export declare class DescribeJobFlowsRequest extends SpeakeasyBase {
    describeJobFlowsInput: shared.DescribeJobFlowsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeJobFlowsXAmzTargetEnum;
}
export declare class DescribeJobFlowsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeJobFlowsOutput?: shared.DescribeJobFlowsOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
