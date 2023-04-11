import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeJobExecutionRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A string (consisting of the digits "0" through "9" which is used to specify a particular job execution on a particular device.
     */
    executionNumber?: number;
    /**
     * The unique identifier you assigned to this job when it was created.
     */
    jobId: string;
    /**
     * The name of the thing on which the job execution is running.
     */
    thingName: string;
}
export declare class DescribeJobExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeJobExecutionResponse?: shared.DescribeJobExecutionResponse;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
