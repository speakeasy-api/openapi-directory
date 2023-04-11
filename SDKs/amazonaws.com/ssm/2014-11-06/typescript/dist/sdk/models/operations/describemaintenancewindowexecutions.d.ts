import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMaintenanceWindowExecutionsXAmzTargetEnum {
    AmazonSSMDescribeMaintenanceWindowExecutions = "AmazonSSM.DescribeMaintenanceWindowExecutions"
}
export declare class DescribeMaintenanceWindowExecutionsRequest extends SpeakeasyBase {
    describeMaintenanceWindowExecutionsRequest: shared.DescribeMaintenanceWindowExecutionsRequest;
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
    xAmzTarget: DescribeMaintenanceWindowExecutionsXAmzTargetEnum;
}
export declare class DescribeMaintenanceWindowExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeMaintenanceWindowExecutionsResult?: shared.DescribeMaintenanceWindowExecutionsResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
