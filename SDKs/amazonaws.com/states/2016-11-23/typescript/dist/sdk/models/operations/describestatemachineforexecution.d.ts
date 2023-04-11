import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeStateMachineForExecutionXAmzTargetEnum {
    AWSStepFunctionsDescribeStateMachineForExecution = "AWSStepFunctions.DescribeStateMachineForExecution"
}
export declare class DescribeStateMachineForExecutionRequest extends SpeakeasyBase {
    describeStateMachineForExecutionInput: shared.DescribeStateMachineForExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStateMachineForExecutionXAmzTargetEnum;
}
export declare class DescribeStateMachineForExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeStateMachineForExecutionOutput?: shared.DescribeStateMachineForExecutionOutput;
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
