import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMaintenanceWindowsForTargetXAmzTargetEnum {
    AmazonSSMDescribeMaintenanceWindowsForTarget = "AmazonSSM.DescribeMaintenanceWindowsForTarget"
}
export declare class DescribeMaintenanceWindowsForTargetRequest extends SpeakeasyBase {
    describeMaintenanceWindowsForTargetRequest: shared.DescribeMaintenanceWindowsForTargetRequest;
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
    xAmzTarget: DescribeMaintenanceWindowsForTargetXAmzTargetEnum;
}
export declare class DescribeMaintenanceWindowsForTargetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeMaintenanceWindowsForTargetResult?: shared.DescribeMaintenanceWindowsForTargetResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
