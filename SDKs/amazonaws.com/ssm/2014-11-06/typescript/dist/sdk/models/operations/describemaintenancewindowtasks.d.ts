import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMaintenanceWindowTasksXAmzTargetEnum {
    AmazonSSMDescribeMaintenanceWindowTasks = "AmazonSSM.DescribeMaintenanceWindowTasks"
}
export declare class DescribeMaintenanceWindowTasksRequest extends SpeakeasyBase {
    describeMaintenanceWindowTasksRequest: shared.DescribeMaintenanceWindowTasksRequest;
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
    xAmzTarget: DescribeMaintenanceWindowTasksXAmzTargetEnum;
}
export declare class DescribeMaintenanceWindowTasksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeMaintenanceWindowTasksResult?: shared.DescribeMaintenanceWindowTasksResult;
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
