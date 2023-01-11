package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TaskRunSortCriteria
 * The sorting criteria that are used to sort the list of task runs for the machine learning transform.
**/
public class TaskRunSortCriteria {
    @JsonProperty("Column")
    public TaskRunSortColumnTypeEnum column;
    public TaskRunSortCriteria withColumn(TaskRunSortColumnTypeEnum column) {
        this.column = column;
        return this;
    }
    @JsonProperty("SortDirection")
    public SortDirectionTypeEnum sortDirection;
    public TaskRunSortCriteria withSortDirection(SortDirectionTypeEnum sortDirection) {
        this.sortDirection = sortDirection;
        return this;
    }
}