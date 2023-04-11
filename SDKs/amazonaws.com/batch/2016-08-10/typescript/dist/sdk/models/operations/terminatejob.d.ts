import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TerminateJobRequestBody extends SpeakeasyBase {
    /**
     * The Batch job ID of the job to terminate.
     */
    jobId: string;
    /**
     * A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the Batch activity logs.
     */
    reason: string;
}
export declare class TerminateJobRequest extends SpeakeasyBase {
    requestBody: TerminateJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TerminateJobResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    terminateJobResponse?: Record<string, any>;
}
