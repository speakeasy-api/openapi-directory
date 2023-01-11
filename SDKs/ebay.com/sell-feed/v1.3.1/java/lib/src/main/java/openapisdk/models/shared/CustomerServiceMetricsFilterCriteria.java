package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomerServiceMetricsFilterCriteria
 * A complex data type that filters data for report creation. See CustomerServiceMetricsFilterCriteria for fields and descriptions.
**/
public class CustomerServiceMetricsFilterCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerServiceMetricType")
    public String customerServiceMetricType;
    public CustomerServiceMetricsFilterCriteria withCustomerServiceMetricType(String customerServiceMetricType) {
        this.customerServiceMetricType = customerServiceMetricType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluationMarketplaceId")
    public String evaluationMarketplaceId;
    public CustomerServiceMetricsFilterCriteria withEvaluationMarketplaceId(String evaluationMarketplaceId) {
        this.evaluationMarketplaceId = evaluationMarketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listingCategories")
    public String[] listingCategories;
    public CustomerServiceMetricsFilterCriteria withListingCategories(String[] listingCategories) {
        this.listingCategories = listingCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingRegions")
    public String[] shippingRegions;
    public CustomerServiceMetricsFilterCriteria withShippingRegions(String[] shippingRegions) {
        this.shippingRegions = shippingRegions;
        return this;
    }
}