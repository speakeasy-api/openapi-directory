import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetUsageForecastXAmzTargetEnum {
    AWSInsightsIndexServiceGetUsageForecast = "AWSInsightsIndexService.GetUsageForecast"
}
export declare class GetUsageForecastRequest extends SpeakeasyBase {
    getUsageForecastRequest: shared.GetUsageForecastRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetUsageForecastXAmzTargetEnum;
}
export declare class GetUsageForecastResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DataUnavailableException
     */
    dataUnavailableException?: any;
    /**
     * Success
     */
    getUsageForecastResponse?: shared.GetUsageForecastResponse;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnresolvableUsageUnitException
     */
    unresolvableUsageUnitException?: any;
}
