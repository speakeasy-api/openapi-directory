package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProductSample
 * Describe a product sample
**/
public class ProductSample {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productValues")
    public java.util.Map<String, String> productValues;
    public ProductSample withProductValues(java.util.Map<String, String> productValues) {
        this.productValues = productValues;
        return this;
    }
}