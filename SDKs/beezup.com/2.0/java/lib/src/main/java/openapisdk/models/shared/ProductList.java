package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProductList {
    @JsonProperty("paginationResult")
    public BeezUpCommonPaginationResult paginationResult;
    public ProductList withPaginationResult(BeezUpCommonPaginationResult paginationResult) {
        this.paginationResult = paginationResult;
        return this;
    }
    @JsonProperty("products")
    public Object[] products;
    public ProductList withProducts(Object[] products) {
        this.products = products;
        return this;
    }
}