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
     * Optional. A number that identifies a particular job execution on a particular device. If not specified, the latest job execution is returned.
     */
    executionNumber?: number;
    /**
     * Optional. When set to true, the response contains the job document. The default is false.
     */
    includeJobDocument?: boolean;
    /**
     * The unique identifier assigned to this job when it was created.
     */
    jobId: string;
    /**
     * The thing name associated with the device the job execution is running on.
     */
    thingName: string;
}
export declare class DescribeJobExecutionResponse extends SpeakeasyBase {
    /**
     * CertificateValidationException
     */
    certificateValidationException?: any;
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
     * TerminalStateException
     */
    terminalStateException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
