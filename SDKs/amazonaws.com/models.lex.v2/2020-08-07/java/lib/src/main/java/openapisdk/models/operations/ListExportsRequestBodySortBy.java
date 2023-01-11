package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListExportsRequestBodySortBy
 * Provides information about sorting a list of exports.
**/
public class ListExportsRequestBodySortBy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attribute")
    public openapisdk.models.shared.ExportSortAttributeEnum attribute;
    public ListExportsRequestBodySortBy withAttribute(openapisdk.models.shared.ExportSortAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public openapisdk.models.shared.SortOrderEnum order;
    public ListExportsRequestBodySortBy withOrder(openapisdk.models.shared.SortOrderEnum order) {
        this.order = order;
        return this;
    }
}