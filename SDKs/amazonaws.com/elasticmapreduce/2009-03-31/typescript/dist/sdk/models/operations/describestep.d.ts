import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeStepXAmzTargetEnum {
    ElasticMapReduceDescribeStep = "ElasticMapReduce.DescribeStep"
}
export declare class DescribeStepRequest extends SpeakeasyBase {
    describeStepInput: shared.DescribeStepInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStepXAmzTargetEnum;
}
export declare class DescribeStepResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeStepOutput?: shared.DescribeStepOutput;
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
