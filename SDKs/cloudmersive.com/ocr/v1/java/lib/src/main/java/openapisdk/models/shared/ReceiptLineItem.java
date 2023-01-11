package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReceiptLineItem
 * Receipt line item, comprised of a product or item and a price (if available)
**/
public class ReceiptLineItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ItemDescription")
    public String itemDescription;
    public ReceiptLineItem withItemDescription(String itemDescription) {
        this.itemDescription = itemDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ItemPrice")
    public Double itemPrice;
    public ReceiptLineItem withItemPrice(Double itemPrice) {
        this.itemPrice = itemPrice;
        return this;
    }
}