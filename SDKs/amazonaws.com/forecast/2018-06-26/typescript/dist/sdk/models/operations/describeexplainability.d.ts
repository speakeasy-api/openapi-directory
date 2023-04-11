import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeExplainabilityXAmzTargetEnum {
    AmazonForecastDescribeExplainability = "AmazonForecast.DescribeExplainability"
}
export declare class DescribeExplainabilityRequest extends SpeakeasyBase {
    describeExplainabilityRequest: shared.DescribeExplainabilityRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeExplainabilityXAmzTargetEnum;
}
export declare class DescribeExplainabilityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeExplainabilityResponse?: shared.DescribeExplainabilityResponse;
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
