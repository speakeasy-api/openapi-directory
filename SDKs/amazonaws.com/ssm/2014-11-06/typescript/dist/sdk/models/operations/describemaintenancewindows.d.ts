import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMaintenanceWindowsXAmzTargetEnum {
    AmazonSSMDescribeMaintenanceWindows = "AmazonSSM.DescribeMaintenanceWindows"
}
export declare class DescribeMaintenanceWindowsRequest extends SpeakeasyBase {
    describeMaintenanceWindowsRequest: shared.DescribeMaintenanceWindowsRequest;
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
    xAmzTarget: DescribeMaintenanceWindowsXAmzTargetEnum;
}
export declare class DescribeMaintenanceWindowsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeMaintenanceWindowsResult?: shared.DescribeMaintenanceWindowsResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
