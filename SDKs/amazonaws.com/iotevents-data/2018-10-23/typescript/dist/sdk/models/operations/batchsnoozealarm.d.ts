import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchSnoozeAlarmRequestBody extends SpeakeasyBase {
    /**
     * The list of snooze action requests. You can specify up to 10 requests per operation.
     */
    snoozeActionRequests: shared.SnoozeAlarmActionRequest[];
}
export declare class BatchSnoozeAlarmRequest extends SpeakeasyBase {
    requestBody: BatchSnoozeAlarmRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchSnoozeAlarmResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchSnoozeAlarmResponse?: shared.BatchSnoozeAlarmResponse;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
