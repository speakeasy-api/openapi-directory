package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AnalyticsProductColumnFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalAnalyticsProductColumnFilters")
    public java.util.Map<String, AnalyticsProductColumnFilter> additionalAnalyticsProductColumnFilters;
    public AnalyticsProductColumnFilters withAdditionalAnalyticsProductColumnFilters(java.util.Map<String, AnalyticsProductColumnFilter> additionalAnalyticsProductColumnFilters) {
        this.additionalAnalyticsProductColumnFilters = additionalAnalyticsProductColumnFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public AnalyticsProductColumnFilters withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public AnalyticsProductColumnFilters withTitle(String title) {
        this.title = title;
        return this;
    }
}