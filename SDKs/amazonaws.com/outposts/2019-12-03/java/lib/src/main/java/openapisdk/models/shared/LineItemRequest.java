package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LineItemRequest
 * Information about a line item request.
**/
public class LineItemRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogItemId")
    public String catalogItemId;
    public LineItemRequest withCatalogItemId(String catalogItemId) {
        this.catalogItemId = catalogItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Quantity")
    public Long quantity;
    public LineItemRequest withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}