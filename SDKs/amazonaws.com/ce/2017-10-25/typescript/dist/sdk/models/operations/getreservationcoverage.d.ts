import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetReservationCoverageXAmzTargetEnum {
    AWSInsightsIndexServiceGetReservationCoverage = "AWSInsightsIndexService.GetReservationCoverage"
}
export declare class GetReservationCoverageRequest extends SpeakeasyBase {
    getReservationCoverageRequest: shared.GetReservationCoverageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetReservationCoverageXAmzTargetEnum;
}
export declare class GetReservationCoverageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DataUnavailableException
     */
    dataUnavailableException?: any;
    /**
     * Success
     */
    getReservationCoverageResponse?: shared.GetReservationCoverageResponse;
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
