import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeExplainabilityExportXAmzTargetEnum {
    AmazonForecastDescribeExplainabilityExport = "AmazonForecast.DescribeExplainabilityExport"
}
export declare class DescribeExplainabilityExportRequest extends SpeakeasyBase {
    describeExplainabilityExportRequest: shared.DescribeExplainabilityExportRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeExplainabilityExportXAmzTargetEnum;
}
export declare class DescribeExplainabilityExportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeExplainabilityExportResponse?: shared.DescribeExplainabilityExportResponse;
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
