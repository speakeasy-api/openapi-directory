import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchPutMetricsRequestBody extends SpeakeasyBase {
    /**
     * A list of raw metric values to put.
     */
    metricData: shared.RawMetricData[];
    /**
     * The name of the Trial Component to associate with the metrics.
     */
    trialComponentName: string;
}
export declare class BatchPutMetricsRequest extends SpeakeasyBase {
    requestBody: BatchPutMetricsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchPutMetricsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchPutMetricsResponse?: shared.BatchPutMetricsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
