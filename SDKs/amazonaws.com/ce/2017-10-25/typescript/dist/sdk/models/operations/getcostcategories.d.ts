import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCostCategoriesXAmzTargetEnum {
    AWSInsightsIndexServiceGetCostCategories = "AWSInsightsIndexService.GetCostCategories"
}
export declare class GetCostCategoriesRequest extends SpeakeasyBase {
    getCostCategoriesRequest: shared.GetCostCategoriesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCostCategoriesXAmzTargetEnum;
}
export declare class GetCostCategoriesResponse extends SpeakeasyBase {
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
    getCostCategoriesResponse?: shared.GetCostCategoriesResponse;
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
