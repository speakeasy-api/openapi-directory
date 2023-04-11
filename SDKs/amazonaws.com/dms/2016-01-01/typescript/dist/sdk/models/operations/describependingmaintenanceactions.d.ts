import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePendingMaintenanceActionsXAmzTargetEnum {
    AmazonDMSv20160101DescribePendingMaintenanceActions = "AmazonDMSv20160101.DescribePendingMaintenanceActions"
}
export declare class DescribePendingMaintenanceActionsRequest extends SpeakeasyBase {
    describePendingMaintenanceActionsMessage: shared.DescribePendingMaintenanceActionsMessage;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePendingMaintenanceActionsXAmzTargetEnum;
}
export declare class DescribePendingMaintenanceActionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePendingMaintenanceActionsResponse?: shared.DescribePendingMaintenanceActionsResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
