import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeForecastExportJobXAmzTargetEnum {
    AmazonForecastDescribeForecastExportJob = "AmazonForecast.DescribeForecastExportJob"
}
export declare class DescribeForecastExportJobRequest extends SpeakeasyBase {
    describeForecastExportJobRequest: shared.DescribeForecastExportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeForecastExportJobXAmzTargetEnum;
}
export declare class DescribeForecastExportJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeForecastExportJobResponse?: shared.DescribeForecastExportJobResponse;
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
