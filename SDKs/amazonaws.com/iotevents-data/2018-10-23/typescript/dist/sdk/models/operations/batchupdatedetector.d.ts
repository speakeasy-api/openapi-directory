import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchUpdateDetectorRequestBody extends SpeakeasyBase {
    /**
     * The list of detectors (instances) to update, along with the values to update.
     */
    detectors: shared.UpdateDetectorRequest[];
}
export declare class BatchUpdateDetectorRequest extends SpeakeasyBase {
    requestBody: BatchUpdateDetectorRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchUpdateDetectorResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchUpdateDetectorResponse?: shared.BatchUpdateDetectorResponse;
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
