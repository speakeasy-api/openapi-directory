package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PortfolioRemoveItemRequest {
    @JsonProperty("item")
    public String item;
    public PortfolioRemoveItemRequest withItem(String item) {
        this.item = item;
        return this;
    }
}