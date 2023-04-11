import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAnomalyMonitorXAmzTargetEnum {
    AWSInsightsIndexServiceCreateAnomalyMonitor = "AWSInsightsIndexService.CreateAnomalyMonitor"
}
export declare class CreateAnomalyMonitorRequest extends SpeakeasyBase {
    createAnomalyMonitorRequest: shared.CreateAnomalyMonitorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAnomalyMonitorXAmzTargetEnum;
}
export declare class CreateAnomalyMonitorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAnomalyMonitorResponse?: shared.CreateAnomalyMonitorResponse;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
