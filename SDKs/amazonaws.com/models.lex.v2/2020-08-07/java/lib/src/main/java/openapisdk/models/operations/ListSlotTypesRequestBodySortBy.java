package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSlotTypesRequestBodySortBy
 * Specifies attributes for sorting a list of slot types.
**/
public class ListSlotTypesRequestBodySortBy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attribute")
    public openapisdk.models.shared.SlotTypeSortAttributeEnum attribute;
    public ListSlotTypesRequestBodySortBy withAttribute(openapisdk.models.shared.SlotTypeSortAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public openapisdk.models.shared.SortOrderEnum order;
    public ListSlotTypesRequestBodySortBy withOrder(openapisdk.models.shared.SortOrderEnum order) {
        this.order = order;
        return this;
    }
}