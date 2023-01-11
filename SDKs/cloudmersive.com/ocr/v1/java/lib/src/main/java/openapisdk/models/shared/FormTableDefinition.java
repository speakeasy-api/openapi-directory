package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FormTableDefinition
 * Definition of a form table for OCR data extraction from images
**/
public class FormTableDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ColumnDefinitions")
    public FormTableColumnDefinition[] columnDefinitions;
    public FormTableDefinition withColumnDefinitions(FormTableColumnDefinition[] columnDefinitions) {
        this.columnDefinitions = columnDefinitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableID")
    public String tableID;
    public FormTableDefinition withTableId(String tableID) {
        this.tableID = tableID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetRowHeight_Relative")
    public Double targetRowHeightRelative;
    public FormTableDefinition withTargetRowHeightRelative(Double targetRowHeightRelative) {
        this.targetRowHeightRelative = targetRowHeightRelative;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetTableHeight_Relative")
    public Double targetTableHeightRelative;
    public FormTableDefinition withTargetTableHeightRelative(Double targetTableHeightRelative) {
        this.targetTableHeightRelative = targetTableHeightRelative;
        return this;
    }
}