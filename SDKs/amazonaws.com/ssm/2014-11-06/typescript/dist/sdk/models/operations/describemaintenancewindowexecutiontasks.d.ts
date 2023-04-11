import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMaintenanceWindowExecutionTasksXAmzTargetEnum {
    AmazonSSMDescribeMaintenanceWindowExecutionTasks = "AmazonSSM.DescribeMaintenanceWindowExecutionTasks"
}
export declare class DescribeMaintenanceWindowExecutionTasksRequest extends SpeakeasyBase {
    describeMaintenanceWindowExecutionTasksRequest: shared.DescribeMaintenanceWindowExecutionTasksRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMaintenanceWindowExecutionTasksXAmzTargetEnum;
}
export declare class DescribeMaintenanceWindowExecutionTasksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeMaintenanceWindowExecutionTasksResult?: shared.DescribeMaintenanceWindowExecutionTasksResult;
    /**
     * DoesNotExistException
     */
    doesNotExistException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
