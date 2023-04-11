import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CancelJobRequestBody extends SpeakeasyBase {
    /**
     * The Batch job ID of the job to cancel.
     */
    jobId: string;
    /**
     * A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the Batch activity logs.
     */
    reason: string;
}
export declare class CancelJobRequest extends SpeakeasyBase {
    requestBody: CancelJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelJobResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelJobResponse?: Record<string, any>;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerException
     */
    serverException?: any;
}
