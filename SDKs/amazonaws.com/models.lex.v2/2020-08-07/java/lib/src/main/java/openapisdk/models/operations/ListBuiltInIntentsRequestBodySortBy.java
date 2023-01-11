package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBuiltInIntentsRequestBodySortBy
 * Specifies attributes for sorting a list of built-in intents.
**/
public class ListBuiltInIntentsRequestBodySortBy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attribute")
    public openapisdk.models.shared.BuiltInIntentSortAttributeEnum attribute;
    public ListBuiltInIntentsRequestBodySortBy withAttribute(openapisdk.models.shared.BuiltInIntentSortAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public openapisdk.models.shared.SortOrderEnum order;
    public ListBuiltInIntentsRequestBodySortBy withOrder(openapisdk.models.shared.SortOrderEnum order) {
        this.order = order;
        return this;
    }
}