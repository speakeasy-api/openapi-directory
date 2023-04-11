import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListMonitoringExecutionsXAmzTargetEnum {
    SageMakerListMonitoringExecutions = "SageMaker.ListMonitoringExecutions"
}
export declare class ListMonitoringExecutionsRequest extends SpeakeasyBase {
    listMonitoringExecutionsRequest: shared.ListMonitoringExecutionsRequest;
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
    xAmzTarget: ListMonitoringExecutionsXAmzTargetEnum;
}
export declare class ListMonitoringExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listMonitoringExecutionsResponse?: shared.ListMonitoringExecutionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
