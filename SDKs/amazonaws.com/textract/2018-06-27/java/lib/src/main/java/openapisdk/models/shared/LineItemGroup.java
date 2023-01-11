package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LineItemGroup
 * A grouping of tables which contain LineItems, with each table identified by the table's <code>LineItemGroupIndex</code>.
**/
public class LineItemGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LineItemGroupIndex")
    public Long lineItemGroupIndex;
    public LineItemGroup withLineItemGroupIndex(Long lineItemGroupIndex) {
        this.lineItemGroupIndex = lineItemGroupIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LineItems")
    public LineItemFields[] lineItems;
    public LineItemGroup withLineItems(LineItemFields[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
}