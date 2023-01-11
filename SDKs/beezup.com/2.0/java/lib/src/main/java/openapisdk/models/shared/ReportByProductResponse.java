package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReportByProductResponse {
    @JsonProperty("currencyCode")
    public String currencyCode;
    public ReportByProductResponse withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonProperty("links")
    public ReportByCommonResponseLinks links;
    public ReportByProductResponse withLinks(ReportByCommonResponseLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("paginationResult")
    public BeezUpCommonPaginationResult paginationResult;
    public ReportByProductResponse withPaginationResult(BeezUpCommonPaginationResult paginationResult) {
        this.paginationResult = paginationResult;
        return this;
    }
    @JsonProperty("products")
    public ReportByProduct[] products;
    public ReportByProductResponse withProducts(ReportByProduct[] products) {
        this.products = products;
        return this;
    }
}