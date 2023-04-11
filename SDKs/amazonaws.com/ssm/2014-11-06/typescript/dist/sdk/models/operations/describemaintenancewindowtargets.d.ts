import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMaintenanceWindowTargetsXAmzTargetEnum {
    AmazonSSMDescribeMaintenanceWindowTargets = "AmazonSSM.DescribeMaintenanceWindowTargets"
}
export declare class DescribeMaintenanceWindowTargetsRequest extends SpeakeasyBase {
    describeMaintenanceWindowTargetsRequest: shared.DescribeMaintenanceWindowTargetsRequest;
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
    xAmzTarget: DescribeMaintenanceWindowTargetsXAmzTargetEnum;
}
export declare class DescribeMaintenanceWindowTargetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeMaintenanceWindowTargetsResult?: shared.DescribeMaintenanceWindowTargetsResult;
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
