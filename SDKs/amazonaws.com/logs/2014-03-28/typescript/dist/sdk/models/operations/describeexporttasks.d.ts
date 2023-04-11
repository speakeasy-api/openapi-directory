import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeExportTasksXAmzTargetEnum {
    Logs20140328DescribeExportTasks = "Logs_20140328.DescribeExportTasks"
}
export declare class DescribeExportTasksRequest extends SpeakeasyBase {
    describeExportTasksRequest: shared.DescribeExportTasksRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeExportTasksXAmzTargetEnum;
}
export declare class DescribeExportTasksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeExportTasksResponse?: shared.DescribeExportTasksResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
