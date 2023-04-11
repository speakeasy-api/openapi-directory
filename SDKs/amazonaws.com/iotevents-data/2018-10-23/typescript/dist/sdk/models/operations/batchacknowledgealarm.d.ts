import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchAcknowledgeAlarmRequestBody extends SpeakeasyBase {
    /**
     * The list of acknowledge action requests. You can specify up to 10 requests per operation.
     */
    acknowledgeActionRequests: shared.AcknowledgeAlarmActionRequest[];
}
export declare class BatchAcknowledgeAlarmRequest extends SpeakeasyBase {
    requestBody: BatchAcknowledgeAlarmRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchAcknowledgeAlarmResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchAcknowledgeAlarmResponse?: shared.BatchAcknowledgeAlarmResponse;
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
