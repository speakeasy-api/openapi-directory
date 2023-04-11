import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTaskExecutionXAmzTargetEnum {
    FmrsServiceDescribeTaskExecution = "FmrsService.DescribeTaskExecution"
}
export declare class DescribeTaskExecutionRequest extends SpeakeasyBase {
    describeTaskExecutionRequest: shared.DescribeTaskExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTaskExecutionXAmzTargetEnum;
}
export declare class DescribeTaskExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTaskExecutionResponse?: shared.DescribeTaskExecutionResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
