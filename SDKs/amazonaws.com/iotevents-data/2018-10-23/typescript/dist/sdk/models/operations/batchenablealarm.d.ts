import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchEnableAlarmRequestBody extends SpeakeasyBase {
    /**
     * The list of enable action requests. You can specify up to 10 requests per operation.
     */
    enableActionRequests: shared.EnableAlarmActionRequest[];
}
export declare class BatchEnableAlarmRequest extends SpeakeasyBase {
    requestBody: BatchEnableAlarmRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchEnableAlarmResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchEnableAlarmResponse?: shared.BatchEnableAlarmResponse;
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
