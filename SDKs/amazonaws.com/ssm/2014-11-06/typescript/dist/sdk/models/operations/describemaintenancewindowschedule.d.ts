import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMaintenanceWindowScheduleXAmzTargetEnum {
    AmazonSSMDescribeMaintenanceWindowSchedule = "AmazonSSM.DescribeMaintenanceWindowSchedule"
}
export declare class DescribeMaintenanceWindowScheduleRequest extends SpeakeasyBase {
    describeMaintenanceWindowScheduleRequest: shared.DescribeMaintenanceWindowScheduleRequest;
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
    xAmzTarget: DescribeMaintenanceWindowScheduleXAmzTargetEnum;
}
export declare class DescribeMaintenanceWindowScheduleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeMaintenanceWindowScheduleResult?: shared.DescribeMaintenanceWindowScheduleResult;
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
