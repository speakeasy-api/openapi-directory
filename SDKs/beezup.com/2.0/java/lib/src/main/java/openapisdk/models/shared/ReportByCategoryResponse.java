package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportByCategoryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public ReportByCategory[] categories;
    public ReportByCategoryResponse withCategories(ReportByCategory[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public ReportByCategoryResponse withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ReportByCommonResponseLinks links;
    public ReportByCategoryResponse withLinks(ReportByCommonResponseLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paginationResult")
    public BeezUpCommonPaginationResult paginationResult;
    public ReportByCategoryResponse withPaginationResult(BeezUpCommonPaginationResult paginationResult) {
        this.paginationResult = paginationResult;
        return this;
    }
}