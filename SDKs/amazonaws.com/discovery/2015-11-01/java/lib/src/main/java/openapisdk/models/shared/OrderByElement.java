package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderByElement
 * A field and direction for ordered output.
**/
public class OrderByElement {
    @JsonProperty("fieldName")
    public String fieldName;
    public OrderByElement withFieldName(String fieldName) {
        this.fieldName = fieldName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public OrderStringEnum sortOrder;
    public OrderByElement withSortOrder(OrderStringEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}