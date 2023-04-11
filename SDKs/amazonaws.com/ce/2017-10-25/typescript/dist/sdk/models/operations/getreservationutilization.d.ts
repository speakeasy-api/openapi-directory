import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetReservationUtilizationXAmzTargetEnum {
    AWSInsightsIndexServiceGetReservationUtilization = "AWSInsightsIndexService.GetReservationUtilization"
}
export declare class GetReservationUtilizationRequest extends SpeakeasyBase {
    getReservationUtilizationRequest: shared.GetReservationUtilizationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetReservationUtilizationXAmzTargetEnum;
}
export declare class GetReservationUtilizationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DataUnavailableException
     */
    dataUnavailableException?: any;
    /**
     * Success
     */
    getReservationUtilizationResponse?: shared.GetReservationUtilizationResponse;
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
