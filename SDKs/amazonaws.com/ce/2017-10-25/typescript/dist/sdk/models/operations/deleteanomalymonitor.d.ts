import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAnomalyMonitorXAmzTargetEnum {
    AWSInsightsIndexServiceDeleteAnomalyMonitor = "AWSInsightsIndexService.DeleteAnomalyMonitor"
}
export declare class DeleteAnomalyMonitorRequest extends SpeakeasyBase {
    deleteAnomalyMonitorRequest: shared.DeleteAnomalyMonitorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAnomalyMonitorXAmzTargetEnum;
}
export declare class DeleteAnomalyMonitorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteAnomalyMonitorResponse?: Record<string, any>;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnknownMonitorException
     */
    unknownMonitorException?: any;
}
