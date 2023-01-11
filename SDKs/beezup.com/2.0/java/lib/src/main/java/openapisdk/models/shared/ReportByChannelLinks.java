package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportByChannelLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableProducts")
    public LinksOptimiseByChannelLink disableProducts;
    public ReportByChannelLinks withDisableProducts(LinksOptimiseByChannelLink disableProducts) {
        this.disableProducts = disableProducts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableProducts")
    public LinksOptimiseByChannelLink enableProducts;
    public ReportByChannelLinks withEnableProducts(LinksOptimiseByChannelLink enableProducts) {
        this.enableProducts = enableProducts;
        return this;
    }
}