import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeForecastXAmzTargetEnum {
    AmazonForecastDescribeForecast = "AmazonForecast.DescribeForecast"
}
export declare class DescribeForecastRequest extends SpeakeasyBase {
    describeForecastRequest: shared.DescribeForecastRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeForecastXAmzTargetEnum;
}
export declare class DescribeForecastResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeForecastResponse?: shared.DescribeForecastResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
