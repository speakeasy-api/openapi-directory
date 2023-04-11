import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMonitorXAmzTargetEnum {
    AmazonForecastDescribeMonitor = "AmazonForecast.DescribeMonitor"
}
export declare class DescribeMonitorRequest extends SpeakeasyBase {
    describeMonitorRequest: shared.DescribeMonitorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMonitorXAmzTargetEnum;
}
export declare class DescribeMonitorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeMonitorResponse?: shared.DescribeMonitorResponse;
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
