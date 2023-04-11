import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListLongTermPricingXAmzTargetEnum {
    AWSIESnowballJobManagementServiceListLongTermPricing = "AWSIESnowballJobManagementService.ListLongTermPricing"
}
export declare class ListLongTermPricingRequest extends SpeakeasyBase {
    listLongTermPricingRequest: shared.ListLongTermPricingRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLongTermPricingXAmzTargetEnum;
}
export declare class ListLongTermPricingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidResourceException
     */
    invalidResourceException?: any;
    /**
     * Success
     */
    listLongTermPricingResult?: shared.ListLongTermPricingResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
