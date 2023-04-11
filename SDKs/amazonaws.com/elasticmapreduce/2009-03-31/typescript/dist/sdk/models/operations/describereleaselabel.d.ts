import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeReleaseLabelXAmzTargetEnum {
    ElasticMapReduceDescribeReleaseLabel = "ElasticMapReduce.DescribeReleaseLabel"
}
export declare class DescribeReleaseLabelRequest extends SpeakeasyBase {
    describeReleaseLabelInput: shared.DescribeReleaseLabelInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeReleaseLabelXAmzTargetEnum;
}
export declare class DescribeReleaseLabelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeReleaseLabelOutput?: shared.DescribeReleaseLabelOutput;
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
