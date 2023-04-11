import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePredictorXAmzTargetEnum {
    AmazonForecastDescribePredictor = "AmazonForecast.DescribePredictor"
}
export declare class DescribePredictorRequest extends SpeakeasyBase {
    describePredictorRequest: shared.DescribePredictorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePredictorXAmzTargetEnum;
}
export declare class DescribePredictorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePredictorResponse?: shared.DescribePredictorResponse;
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
