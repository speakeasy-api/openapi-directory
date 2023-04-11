import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateAnomalyMonitorXAmzTargetEnum {
    AWSInsightsIndexServiceUpdateAnomalyMonitor = "AWSInsightsIndexService.UpdateAnomalyMonitor"
}
export declare class UpdateAnomalyMonitorRequest extends SpeakeasyBase {
    updateAnomalyMonitorRequest: shared.UpdateAnomalyMonitorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAnomalyMonitorXAmzTargetEnum;
}
export declare class UpdateAnomalyMonitorResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * Success
     */
    updateAnomalyMonitorResponse?: shared.UpdateAnomalyMonitorResponse;
}
