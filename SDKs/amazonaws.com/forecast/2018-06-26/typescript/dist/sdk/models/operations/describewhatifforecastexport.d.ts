import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeWhatIfForecastExportXAmzTargetEnum {
    AmazonForecastDescribeWhatIfForecastExport = "AmazonForecast.DescribeWhatIfForecastExport"
}
export declare class DescribeWhatIfForecastExportRequest extends SpeakeasyBase {
    describeWhatIfForecastExportRequest: shared.DescribeWhatIfForecastExportRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWhatIfForecastExportXAmzTargetEnum;
}
export declare class DescribeWhatIfForecastExportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeWhatIfForecastExportResponse?: shared.DescribeWhatIfForecastExportResponse;
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
