import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDataQualityMetricsRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the anomaly detector that you want to investigate.
     */
    anomalyDetectorArn: string;
    /**
     * The Amazon Resource Name (ARN) of a specific data quality metric set.
     */
    metricSetArn?: string;
}
export declare class GetDataQualityMetricsRequest extends SpeakeasyBase {
    requestBody: GetDataQualityMetricsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDataQualityMetricsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getDataQualityMetricsResponse?: shared.GetDataQualityMetricsResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
