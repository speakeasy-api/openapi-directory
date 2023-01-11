package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnereturnsPutResponses201ContentApplication1jsonSchemaItems {
    @JsonProperty("quantityExpected")
    public Long quantityExpected;
    public OnereturnsPutResponses201ContentApplication1jsonSchemaItems withQuantityExpected(Long quantityExpected) {
        this.quantityExpected = quantityExpected;
        return this;
    }
    @JsonProperty("sku")
    public String sku;
    public OnereturnsPutResponses201ContentApplication1jsonSchemaItems withSku(String sku) {
        this.sku = sku;
        return this;
    }
}