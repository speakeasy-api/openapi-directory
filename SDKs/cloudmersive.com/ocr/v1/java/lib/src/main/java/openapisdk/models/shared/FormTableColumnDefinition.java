package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FormTableColumnDefinition
 * Definition of a column within a table for OCR data extraction from images
**/
public class FormTableColumnDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowNumericDigits")
    public Boolean allowNumericDigits;
    public FormTableColumnDefinition withAllowNumericDigits(Boolean allowNumericDigits) {
        this.allowNumericDigits = allowNumericDigits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnchorMode")
    public String anchorMode;
    public FormTableColumnDefinition withAnchorMode(String anchorMode) {
        this.anchorMode = anchorMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ColumnID")
    public String columnID;
    public FormTableColumnDefinition withColumnId(String columnID) {
        this.columnID = columnID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataType")
    public String dataType;
    public FormTableColumnDefinition withDataType(String dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumCharacterCount")
    public Integer minimumCharacterCount;
    public FormTableColumnDefinition withMinimumCharacterCount(Integer minimumCharacterCount) {
        this.minimumCharacterCount = minimumCharacterCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TopAnchor")
    public String topAnchor;
    public FormTableColumnDefinition withTopAnchor(String topAnchor) {
        this.topAnchor = topAnchor;
        return this;
    }
}