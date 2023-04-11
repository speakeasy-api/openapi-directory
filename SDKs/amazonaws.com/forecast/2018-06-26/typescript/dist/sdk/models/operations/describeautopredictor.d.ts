import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAutoPredictorXAmzTargetEnum {
    AmazonForecastDescribeAutoPredictor = "AmazonForecast.DescribeAutoPredictor"
}
export declare class DescribeAutoPredictorRequest extends SpeakeasyBase {
    describeAutoPredictorRequest: shared.DescribeAutoPredictorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAutoPredictorXAmzTargetEnum;
}
export declare class DescribeAutoPredictorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAutoPredictorResponse?: shared.DescribeAutoPredictorResponse;
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
