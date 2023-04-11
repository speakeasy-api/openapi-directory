import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeActivityXAmzTargetEnum {
    AWSStepFunctionsDescribeActivity = "AWSStepFunctions.DescribeActivity"
}
export declare class DescribeActivityRequest extends SpeakeasyBase {
    describeActivityInput: shared.DescribeActivityInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeActivityXAmzTargetEnum;
}
export declare class DescribeActivityResponse extends SpeakeasyBase {
    /**
     * ActivityDoesNotExist
     */
    activityDoesNotExist?: any;
    contentType: string;
    /**
     * Success
     */
    describeActivityOutput?: shared.DescribeActivityOutput;
    /**
     * InvalidArn
     */
    invalidArn?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
