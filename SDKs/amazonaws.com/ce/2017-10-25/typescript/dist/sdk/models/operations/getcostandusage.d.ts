import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCostAndUsageXAmzTargetEnum {
    AWSInsightsIndexServiceGetCostAndUsage = "AWSInsightsIndexService.GetCostAndUsage"
}
export declare class GetCostAndUsageRequest extends SpeakeasyBase {
    getCostAndUsageRequest: shared.GetCostAndUsageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCostAndUsageXAmzTargetEnum;
}
export declare class GetCostAndUsageResponse extends SpeakeasyBase {
    /**
     * BillExpirationException
     */
    billExpirationException?: any;
    contentType: string;
    /**
     * DataUnavailableException
     */
    dataUnavailableException?: any;
    /**
     * Success
     */
    getCostAndUsageResponse?: shared.GetCostAndUsageResponse;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * RequestChangedException
     */
    requestChangedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
