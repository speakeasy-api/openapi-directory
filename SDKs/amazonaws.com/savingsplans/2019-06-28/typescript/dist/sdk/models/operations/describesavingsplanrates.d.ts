import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeSavingsPlanRatesRequestBody extends SpeakeasyBase {
    /**
     * The filters.
     */
    filters?: shared.SavingsPlanRateFilter[];
    /**
     * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
     */
    maxResults?: number;
    /**
     * The token for the next page of results.
     */
    nextToken?: string;
    /**
     * The ID of the Savings Plan.
     */
    savingsPlanId: string;
}
export declare class DescribeSavingsPlanRatesRequest extends SpeakeasyBase {
    requestBody: DescribeSavingsPlanRatesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSavingsPlanRatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSavingsPlanRatesResponse?: shared.DescribeSavingsPlanRatesResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
