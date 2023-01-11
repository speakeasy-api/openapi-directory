package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSavingsPlansOfferingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencies")
    public openapisdk.models.shared.CurrencyCodeEnum[] currencies;
    public DescribeSavingsPlansOfferingsRequestBody withCurrencies(openapisdk.models.shared.CurrencyCodeEnum[] currencies) {
        this.currencies = currencies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("descriptions")
    public String[] descriptions;
    public DescribeSavingsPlansOfferingsRequestBody withDescriptions(String[] descriptions) {
        this.descriptions = descriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durations")
    public Long[] durations;
    public DescribeSavingsPlansOfferingsRequestBody withDurations(Long[] durations) {
        this.durations = durations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public openapisdk.models.shared.SavingsPlanOfferingFilterElement[] filters;
    public DescribeSavingsPlansOfferingsRequestBody withFilters(openapisdk.models.shared.SavingsPlanOfferingFilterElement[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeSavingsPlansOfferingsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeSavingsPlansOfferingsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offeringIds")
    public String[] offeringIds;
    public DescribeSavingsPlansOfferingsRequestBody withOfferingIds(String[] offeringIds) {
        this.offeringIds = offeringIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public String[] operations;
    public DescribeSavingsPlansOfferingsRequestBody withOperations(String[] operations) {
        this.operations = operations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentOptions")
    public openapisdk.models.shared.SavingsPlanPaymentOptionEnum[] paymentOptions;
    public DescribeSavingsPlansOfferingsRequestBody withPaymentOptions(openapisdk.models.shared.SavingsPlanPaymentOptionEnum[] paymentOptions) {
        this.paymentOptions = paymentOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("planTypes")
    public openapisdk.models.shared.SavingsPlanTypeEnum[] planTypes;
    public DescribeSavingsPlansOfferingsRequestBody withPlanTypes(openapisdk.models.shared.SavingsPlanTypeEnum[] planTypes) {
        this.planTypes = planTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productType")
    public DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum productType;
    public DescribeSavingsPlansOfferingsRequestBody withProductType(DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum productType) {
        this.productType = productType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceCodes")
    public String[] serviceCodes;
    public DescribeSavingsPlansOfferingsRequestBody withServiceCodes(String[] serviceCodes) {
        this.serviceCodes = serviceCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageTypes")
    public String[] usageTypes;
    public DescribeSavingsPlansOfferingsRequestBody withUsageTypes(String[] usageTypes) {
        this.usageTypes = usageTypes;
        return this;
    }
}