import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAnomaliesXAmzTargetEnum {
    AWSInsightsIndexServiceGetAnomalies = "AWSInsightsIndexService.GetAnomalies"
}
export declare class GetAnomaliesRequest extends SpeakeasyBase {
    getAnomaliesRequest: shared.GetAnomaliesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAnomaliesXAmzTargetEnum;
}
export declare class GetAnomaliesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAnomaliesResponse?: shared.GetAnomaliesResponse;
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
}
