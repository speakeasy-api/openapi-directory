import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMaintenanceWindowExecutionTaskInvocationsXAmzTargetEnum {
    AmazonSSMDescribeMaintenanceWindowExecutionTaskInvocations = "AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations"
}
export declare class DescribeMaintenanceWindowExecutionTaskInvocationsRequest extends SpeakeasyBase {
    describeMaintenanceWindowExecutionTaskInvocationsRequest: shared.DescribeMaintenanceWindowExecutionTaskInvocationsRequest;
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
    xAmzTarget: DescribeMaintenanceWindowExecutionTaskInvocationsXAmzTargetEnum;
}
export declare class DescribeMaintenanceWindowExecutionTaskInvocationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeMaintenanceWindowExecutionTaskInvocationsResult?: shared.DescribeMaintenanceWindowExecutionTaskInvocationsResult;
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
