import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelJobRequestBody extends SpeakeasyBase {
    /**
     * An optional comment string describing why the job was canceled.
     */
    comment?: string;
    /**
     * (Optional)A reason code string that explains why the job was canceled.
     */
    reasonCode?: string;
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
    /**
     * <p>(Optional) If <code>true</code> job executions with status "IN_PROGRESS" and "QUEUED" are canceled, otherwise only job executions with status "QUEUED" are canceled. The default is <code>false</code>.</p> <p>Canceling a job which is "IN_PROGRESS", will cause a device which is executing the job to be unable to update the job execution status. Use caution and ensure that each device executing a job which is canceled is able to recover to a valid state.</p>
     */
    force?: boolean;
    /**
     * The unique identifier you assigned to this job when it was created.
     */
    jobId: string;
}
export declare class CancelJobResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelJobResponse?: shared.CancelJobResponse;
    contentType: string;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
