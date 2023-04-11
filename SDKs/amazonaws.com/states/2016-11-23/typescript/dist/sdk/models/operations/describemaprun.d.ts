import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMapRunXAmzTargetEnum {
    AWSStepFunctionsDescribeMapRun = "AWSStepFunctions.DescribeMapRun"
}
export declare class DescribeMapRunRequest extends SpeakeasyBase {
    describeMapRunInput: shared.DescribeMapRunInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMapRunXAmzTargetEnum;
}
export declare class DescribeMapRunResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeMapRunOutput?: shared.DescribeMapRunOutput;
    /**
     * InvalidArn
     */
    invalidArn?: any;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
