import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeStateMachineXAmzTargetEnum {
    AWSStepFunctionsDescribeStateMachine = "AWSStepFunctions.DescribeStateMachine"
}
export declare class DescribeStateMachineRequest extends SpeakeasyBase {
    describeStateMachineInput: shared.DescribeStateMachineInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStateMachineXAmzTargetEnum;
}
export declare class DescribeStateMachineResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeStateMachineOutput?: shared.DescribeStateMachineOutput;
    /**
     * InvalidArn
     */
    invalidArn?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * StateMachineDoesNotExist
     */
    stateMachineDoesNotExist?: any;
}
