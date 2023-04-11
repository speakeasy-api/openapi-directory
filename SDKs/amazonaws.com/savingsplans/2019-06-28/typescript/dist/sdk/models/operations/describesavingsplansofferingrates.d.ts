import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeSavingsPlansOfferingRatesRequestBody extends SpeakeasyBase {
    /**
     * The filters.
     */
    filters?: shared.SavingsPlanOfferingRateFilterElement[];
    /**
     * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
     */
    maxResults?: number;
    /**
     * The token for the next page of results.
     */
    nextToken?: string;
    /**
     * The specific AWS operation for the line item in the billing report.
     */
    operations?: string[];
    /**
     * The AWS products.
     */
    products?: shared.SavingsPlanProductTypeEnum[];
    /**
     * The IDs of the offerings.
     */
    savingsPlanOfferingIds?: string[];
    /**
     * The payment options.
     */
    savingsPlanPaymentOptions?: shared.SavingsPlanPaymentOptionEnum[];
    /**
     * The plan types.
     */
    savingsPlanTypes?: shared.SavingsPlanTypeEnum[];
    /**
     * The services.
     */
    serviceCodes?: shared.SavingsPlanRateServiceCodeEnum[];
    /**
     * The usage details of the line item in the billing report.
     */
    usageTypes?: string[];
}
export declare class DescribeSavingsPlansOfferingRatesRequest extends SpeakeasyBase {
    requestBody: DescribeSavingsPlansOfferingRatesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSavingsPlansOfferingRatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSavingsPlansOfferingRatesResponse?: shared.DescribeSavingsPlansOfferingRatesResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
