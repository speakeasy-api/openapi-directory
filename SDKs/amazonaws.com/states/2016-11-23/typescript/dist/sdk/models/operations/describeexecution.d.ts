import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeExecutionXAmzTargetEnum {
    AWSStepFunctionsDescribeExecution = "AWSStepFunctions.DescribeExecution"
}
export declare class DescribeExecutionRequest extends SpeakeasyBase {
    describeExecutionInput: shared.DescribeExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeExecutionXAmzTargetEnum;
}
export declare class DescribeExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeExecutionOutput?: shared.DescribeExecutionOutput;
    /**
     * ExecutionDoesNotExist
     */
    executionDoesNotExist?: any;
    /**
     * InvalidArn
     */
    invalidArn?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
