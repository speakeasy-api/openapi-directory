import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePredictorBacktestExportJobXAmzTargetEnum {
    AmazonForecastDescribePredictorBacktestExportJob = "AmazonForecast.DescribePredictorBacktestExportJob"
}
export declare class DescribePredictorBacktestExportJobRequest extends SpeakeasyBase {
    describePredictorBacktestExportJobRequest: shared.DescribePredictorBacktestExportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePredictorBacktestExportJobXAmzTargetEnum;
}
export declare class DescribePredictorBacktestExportJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePredictorBacktestExportJobResponse?: shared.DescribePredictorBacktestExportJobResponse;
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
