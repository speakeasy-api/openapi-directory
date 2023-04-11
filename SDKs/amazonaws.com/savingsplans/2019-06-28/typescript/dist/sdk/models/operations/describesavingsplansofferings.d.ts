import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The product type.
 */
export declare enum DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum {
    Ec2 = "EC2",
    Fargate = "Fargate",
    Lambda = "Lambda",
    SageMaker = "SageMaker"
}
export declare class DescribeSavingsPlansOfferingsRequestBody extends SpeakeasyBase {
    /**
     * The currencies.
     */
    currencies?: shared.CurrencyCodeEnum[];
    /**
     * The descriptions.
     */
    descriptions?: string[];
    /**
     * The durations, in seconds.
     */
    durations?: number[];
    /**
     * The filters.
     */
    filters?: shared.SavingsPlanOfferingFilterElement[];
    /**
     * The maximum number of results to return with a single call. To retrieve additional results, make another call with the returned token value.
     */
    maxResults?: number;
    /**
     * The token for the next page of results.
     */
    nextToken?: string;
    /**
     * The IDs of the offerings.
     */
    offeringIds?: string[];
    /**
     * The specific AWS operation for the line item in the billing report.
     */
    operations?: string[];
    /**
     * The payment options.
     */
    paymentOptions?: shared.SavingsPlanPaymentOptionEnum[];
    /**
     * The plan type.
     */
    planTypes?: shared.SavingsPlanTypeEnum[];
    /**
     * The product type.
     */
    productType?: DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum;
    /**
     * The services.
     */
    serviceCodes?: string[];
    /**
     * The usage details of the line item in the billing report.
     */
    usageTypes?: string[];
}
export declare class DescribeSavingsPlansOfferingsRequest extends SpeakeasyBase {
    requestBody: DescribeSavingsPlansOfferingsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSavingsPlansOfferingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSavingsPlansOfferingsResponse?: shared.DescribeSavingsPlansOfferingsResponse;
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
