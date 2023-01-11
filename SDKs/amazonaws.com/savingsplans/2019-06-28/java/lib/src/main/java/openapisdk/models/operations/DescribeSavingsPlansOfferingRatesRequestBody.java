package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSavingsPlansOfferingRatesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public openapisdk.models.shared.SavingsPlanOfferingRateFilterElement[] filters;
    public DescribeSavingsPlansOfferingRatesRequestBody withFilters(openapisdk.models.shared.SavingsPlanOfferingRateFilterElement[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeSavingsPlansOfferingRatesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeSavingsPlansOfferingRatesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public String[] operations;
    public DescribeSavingsPlansOfferingRatesRequestBody withOperations(String[] operations) {
        this.operations = operations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("products")
    public openapisdk.models.shared.SavingsPlanProductTypeEnum[] products;
    public DescribeSavingsPlansOfferingRatesRequestBody withProducts(openapisdk.models.shared.SavingsPlanProductTypeEnum[] products) {
        this.products = products;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingsPlanOfferingIds")
    public String[] savingsPlanOfferingIds;
    public DescribeSavingsPlansOfferingRatesRequestBody withSavingsPlanOfferingIds(String[] savingsPlanOfferingIds) {
        this.savingsPlanOfferingIds = savingsPlanOfferingIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingsPlanPaymentOptions")
    public openapisdk.models.shared.SavingsPlanPaymentOptionEnum[] savingsPlanPaymentOptions;
    public DescribeSavingsPlansOfferingRatesRequestBody withSavingsPlanPaymentOptions(openapisdk.models.shared.SavingsPlanPaymentOptionEnum[] savingsPlanPaymentOptions) {
        this.savingsPlanPaymentOptions = savingsPlanPaymentOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingsPlanTypes")
    public openapisdk.models.shared.SavingsPlanTypeEnum[] savingsPlanTypes;
    public DescribeSavingsPlansOfferingRatesRequestBody withSavingsPlanTypes(openapisdk.models.shared.SavingsPlanTypeEnum[] savingsPlanTypes) {
        this.savingsPlanTypes = savingsPlanTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceCodes")
    public openapisdk.models.shared.SavingsPlanRateServiceCodeEnum[] serviceCodes;
    public DescribeSavingsPlansOfferingRatesRequestBody withServiceCodes(openapisdk.models.shared.SavingsPlanRateServiceCodeEnum[] serviceCodes) {
        this.serviceCodes = serviceCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usageTypes")
    public String[] usageTypes;
    public DescribeSavingsPlansOfferingRatesRequestBody withUsageTypes(String[] usageTypes) {
        this.usageTypes = usageTypes;
        return this;
    }
}