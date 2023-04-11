import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchGetMetricDataRequestBody extends SpeakeasyBase {
    /**
     * A list of queries for metrics to be retrieved.
     */
    queries: shared.BatchGetMetricDataQuery[];
}
export declare class BatchGetMetricDataRequest extends SpeakeasyBase {
    requestBody: BatchGetMetricDataRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchGetMetricDataResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * Success
     */
    batchGetMetricDataResponse?: shared.BatchGetMetricDataResponse;
    contentType: string;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
