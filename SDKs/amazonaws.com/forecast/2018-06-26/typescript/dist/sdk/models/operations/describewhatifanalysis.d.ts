import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeWhatIfAnalysisXAmzTargetEnum {
    AmazonForecastDescribeWhatIfAnalysis = "AmazonForecast.DescribeWhatIfAnalysis"
}
export declare class DescribeWhatIfAnalysisRequest extends SpeakeasyBase {
    describeWhatIfAnalysisRequest: shared.DescribeWhatIfAnalysisRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWhatIfAnalysisXAmzTargetEnum;
}
export declare class DescribeWhatIfAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeWhatIfAnalysisResponse?: shared.DescribeWhatIfAnalysisResponse;
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
