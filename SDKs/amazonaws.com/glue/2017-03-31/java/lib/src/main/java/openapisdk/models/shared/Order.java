package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Order
 * Specifies the sort order of a sorted column.
**/
public class Order {
    @JsonProperty("Column")
    public String column;
    public Order withColumn(String column) {
        this.column = column;
        return this;
    }
    @JsonProperty("SortOrder")
    public Long sortOrder;
    public Order withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}