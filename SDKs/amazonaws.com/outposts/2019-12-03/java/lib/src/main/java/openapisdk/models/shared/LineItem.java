package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LineItem
 * Information about a line item.
**/
public class LineItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogItemId")
    public String catalogItemId;
    public LineItem withCatalogItemId(String catalogItemId) {
        this.catalogItemId = catalogItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LineItemId")
    public String lineItemId;
    public LineItem withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Quantity")
    public Long quantity;
    public LineItem withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public LineItem withStatus(String status) {
        this.status = status;
        return this;
    }
}