import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CancelSimulationJobBatchRequestBody extends SpeakeasyBase {
    /**
     * The id of the batch to cancel.
     */
    batch: string;
}
export declare class CancelSimulationJobBatchRequest extends SpeakeasyBase {
    requestBody: CancelSimulationJobBatchRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelSimulationJobBatchResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelSimulationJobBatchResponse?: Record<string, any>;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
