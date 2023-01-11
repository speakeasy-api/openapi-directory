package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ColumnImportance
 * <p>A structure containing the column name and column importance score for a column. </p> <p>Column importance helps you understand how columns contribute to your model, by identifying which columns in your records are more important than others.</p>
**/
public class ColumnImportance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ColumnName")
    public String columnName;
    public ColumnImportance withColumnName(String columnName) {
        this.columnName = columnName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Importance")
    public Double importance;
    public ColumnImportance withImportance(Double importance) {
        this.importance = importance;
        return this;
    }
}