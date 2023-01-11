package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListIntentsRequestBodySortBy
 * Specifies attributes for sorting a list of intents.
**/
public class ListIntentsRequestBodySortBy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attribute")
    public openapisdk.models.shared.IntentSortAttributeEnum attribute;
    public ListIntentsRequestBodySortBy withAttribute(openapisdk.models.shared.IntentSortAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public openapisdk.models.shared.SortOrderEnum order;
    public ListIntentsRequestBodySortBy withOrder(openapisdk.models.shared.SortOrderEnum order) {
        this.order = order;
        return this;
    }
}