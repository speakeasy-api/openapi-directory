import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchDeleteDetectorRequestBody extends SpeakeasyBase {
    /**
     * The list of one or more detectors to be deleted.
     */
    detectors: shared.DeleteDetectorRequest[];
}
export declare class BatchDeleteDetectorRequest extends SpeakeasyBase {
    requestBody: BatchDeleteDetectorRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchDeleteDetectorResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDeleteDetectorResponse?: shared.BatchDeleteDetectorResponse;
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
