import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCostAndUsageWithResourcesXAmzTargetEnum {
    AWSInsightsIndexServiceGetCostAndUsageWithResources = "AWSInsightsIndexService.GetCostAndUsageWithResources"
}
export declare class GetCostAndUsageWithResourcesRequest extends SpeakeasyBase {
    getCostAndUsageWithResourcesRequest: shared.GetCostAndUsageWithResourcesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCostAndUsageWithResourcesXAmzTargetEnum;
}
export declare class GetCostAndUsageWithResourcesResponse extends SpeakeasyBase {
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
    getCostAndUsageWithResourcesResponse?: shared.GetCostAndUsageWithResourcesResponse;
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
