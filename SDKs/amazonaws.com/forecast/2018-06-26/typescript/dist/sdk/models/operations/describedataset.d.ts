import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDatasetXAmzTargetEnum {
    AmazonForecastDescribeDataset = "AmazonForecast.DescribeDataset"
}
export declare class DescribeDatasetRequest extends SpeakeasyBase {
    describeDatasetRequest: shared.DescribeDatasetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDatasetXAmzTargetEnum;
}
export declare class DescribeDatasetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDatasetResponse?: shared.DescribeDatasetResponse;
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
