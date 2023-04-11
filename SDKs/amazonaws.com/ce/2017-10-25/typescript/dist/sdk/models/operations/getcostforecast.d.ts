import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCostForecastXAmzTargetEnum {
    AWSInsightsIndexServiceGetCostForecast = "AWSInsightsIndexService.GetCostForecast"
}
export declare class GetCostForecastRequest extends SpeakeasyBase {
    getCostForecastRequest: shared.GetCostForecastRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCostForecastXAmzTargetEnum;
}
export declare class GetCostForecastResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DataUnavailableException
     */
    dataUnavailableException?: any;
    /**
     * Success
     */
    getCostForecastResponse?: shared.GetCostForecastResponse;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
