import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchDisableAlarmRequestBody extends SpeakeasyBase {
    /**
     * The list of disable action requests. You can specify up to 10 requests per operation.
     */
    disableActionRequests: shared.DisableAlarmActionRequest[];
}
export declare class BatchDisableAlarmRequest extends SpeakeasyBase {
    requestBody: BatchDisableAlarmRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchDisableAlarmResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDisableAlarmResponse?: shared.BatchDisableAlarmResponse;
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
