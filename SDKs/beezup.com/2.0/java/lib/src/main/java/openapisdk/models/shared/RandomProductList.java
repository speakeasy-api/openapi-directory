package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RandomProductList {
    @JsonProperty("products")
    public Object[] products;
    public RandomProductList withProducts(Object[] products) {
        this.products = products;
        return this;
    }
}