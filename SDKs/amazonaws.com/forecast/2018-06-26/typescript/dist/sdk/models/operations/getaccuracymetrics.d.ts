import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAccuracyMetricsXAmzTargetEnum {
    AmazonForecastGetAccuracyMetrics = "AmazonForecast.GetAccuracyMetrics"
}
export declare class GetAccuracyMetricsRequest extends SpeakeasyBase {
    getAccuracyMetricsRequest: shared.GetAccuracyMetricsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAccuracyMetricsXAmzTargetEnum;
}
export declare class GetAccuracyMetricsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAccuracyMetricsResponse?: shared.GetAccuracyMetricsResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
