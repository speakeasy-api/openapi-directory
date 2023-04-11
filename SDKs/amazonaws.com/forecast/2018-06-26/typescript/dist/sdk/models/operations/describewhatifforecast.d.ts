import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeWhatIfForecastXAmzTargetEnum {
    AmazonForecastDescribeWhatIfForecast = "AmazonForecast.DescribeWhatIfForecast"
}
export declare class DescribeWhatIfForecastRequest extends SpeakeasyBase {
    describeWhatIfForecastRequest: shared.DescribeWhatIfForecastRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWhatIfForecastXAmzTargetEnum;
}
export declare class DescribeWhatIfForecastResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeWhatIfForecastResponse?: shared.DescribeWhatIfForecastResponse;
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
