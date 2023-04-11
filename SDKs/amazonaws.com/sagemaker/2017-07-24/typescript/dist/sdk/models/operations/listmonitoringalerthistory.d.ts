import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListMonitoringAlertHistoryXAmzTargetEnum {
    SageMakerListMonitoringAlertHistory = "SageMaker.ListMonitoringAlertHistory"
}
export declare class ListMonitoringAlertHistoryRequest extends SpeakeasyBase {
    listMonitoringAlertHistoryRequest: shared.ListMonitoringAlertHistoryRequest;
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
    xAmzTarget: ListMonitoringAlertHistoryXAmzTargetEnum;
}
export declare class ListMonitoringAlertHistoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listMonitoringAlertHistoryResponse?: shared.ListMonitoringAlertHistoryResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
