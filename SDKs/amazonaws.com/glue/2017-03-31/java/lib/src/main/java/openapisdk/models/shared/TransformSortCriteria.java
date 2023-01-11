package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TransformSortCriteria
 * The sorting criteria that are associated with the machine learning transform.
**/
public class TransformSortCriteria {
    @JsonProperty("Column")
    public TransformSortColumnTypeEnum column;
    public TransformSortCriteria withColumn(TransformSortColumnTypeEnum column) {
        this.column = column;
        return this;
    }
    @JsonProperty("SortDirection")
    public SortDirectionTypeEnum sortDirection;
    public TransformSortCriteria withSortDirection(SortDirectionTypeEnum sortDirection) {
        this.sortDirection = sortDirection;
        return this;
    }
}