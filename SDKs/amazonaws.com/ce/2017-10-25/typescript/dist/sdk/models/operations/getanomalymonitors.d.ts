import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAnomalyMonitorsXAmzTargetEnum {
    AWSInsightsIndexServiceGetAnomalyMonitors = "AWSInsightsIndexService.GetAnomalyMonitors"
}
export declare class GetAnomalyMonitorsRequest extends SpeakeasyBase {
    getAnomalyMonitorsRequest: shared.GetAnomalyMonitorsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAnomalyMonitorsXAmzTargetEnum;
}
export declare class GetAnomalyMonitorsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAnomalyMonitorsResponse?: shared.GetAnomalyMonitorsResponse;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
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
