import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListMonitoringAlertsXAmzTargetEnum {
    SageMakerListMonitoringAlerts = "SageMaker.ListMonitoringAlerts"
}
export declare class ListMonitoringAlertsRequest extends SpeakeasyBase {
    listMonitoringAlertsRequest: shared.ListMonitoringAlertsRequest;
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
    xAmzTarget: ListMonitoringAlertsXAmzTargetEnum;
}
export declare class ListMonitoringAlertsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listMonitoringAlertsResponse?: shared.ListMonitoringAlertsResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
