import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDatasetGroupXAmzTargetEnum {
    AmazonForecastDescribeDatasetGroup = "AmazonForecast.DescribeDatasetGroup"
}
export declare class DescribeDatasetGroupRequest extends SpeakeasyBase {
    describeDatasetGroupRequest: shared.DescribeDatasetGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDatasetGroupXAmzTargetEnum;
}
export declare class DescribeDatasetGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDatasetGroupResponse?: shared.DescribeDatasetGroupResponse;
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
