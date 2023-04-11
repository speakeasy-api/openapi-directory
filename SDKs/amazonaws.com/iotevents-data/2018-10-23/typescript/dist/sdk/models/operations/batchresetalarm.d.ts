import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchResetAlarmRequestBody extends SpeakeasyBase {
    /**
     * The list of reset action requests. You can specify up to 10 requests per operation.
     */
    resetActionRequests: shared.ResetAlarmActionRequest[];
}
export declare class BatchResetAlarmRequest extends SpeakeasyBase {
    requestBody: BatchResetAlarmRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchResetAlarmResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchResetAlarmResponse?: shared.BatchResetAlarmResponse;
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
