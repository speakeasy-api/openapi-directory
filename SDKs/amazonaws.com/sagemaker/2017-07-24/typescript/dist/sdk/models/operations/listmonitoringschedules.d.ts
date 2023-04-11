import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListMonitoringSchedulesXAmzTargetEnum {
    SageMakerListMonitoringSchedules = "SageMaker.ListMonitoringSchedules"
}
export declare class ListMonitoringSchedulesRequest extends SpeakeasyBase {
    listMonitoringSchedulesRequest: shared.ListMonitoringSchedulesRequest;
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
    xAmzTarget: ListMonitoringSchedulesXAmzTargetEnum;
}
export declare class ListMonitoringSchedulesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listMonitoringSchedulesResponse?: shared.ListMonitoringSchedulesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
