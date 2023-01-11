package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportByCategoryLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableProducts")
    public LinksOptimiseByCategoryLink disableProducts;
    public ReportByCategoryLinks withDisableProducts(LinksOptimiseByCategoryLink disableProducts) {
        this.disableProducts = disableProducts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableProducts")
    public LinksOptimiseByCategoryLink enableProducts;
    public ReportByCategoryLinks withEnableProducts(LinksOptimiseByCategoryLink enableProducts) {
        this.enableProducts = enableProducts;
        return this;
    }
}