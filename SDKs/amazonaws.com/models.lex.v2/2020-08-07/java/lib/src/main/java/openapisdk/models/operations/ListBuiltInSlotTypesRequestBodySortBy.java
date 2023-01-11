package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBuiltInSlotTypesRequestBodySortBy
 * Specifies attributes for sorting a list of built-in slot types.
**/
public class ListBuiltInSlotTypesRequestBodySortBy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attribute")
    public openapisdk.models.shared.BuiltInSlotTypeSortAttributeEnum attribute;
    public ListBuiltInSlotTypesRequestBodySortBy withAttribute(openapisdk.models.shared.BuiltInSlotTypeSortAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public openapisdk.models.shared.SortOrderEnum order;
    public ListBuiltInSlotTypesRequestBodySortBy withOrder(openapisdk.models.shared.SortOrderEnum order) {
        this.order = order;
        return this;
    }
}