package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ColumnConfiguration
 * Indicates the configuration applied on the column (catalog or custom) during the importation process.
**/
public class ColumnConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beezUPColumnName")
    public String beezUPColumnName;
    public ColumnConfiguration withBeezUpColumnName(String beezUPColumnName) {
        this.beezUPColumnName = beezUPColumnName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canBeTruncated")
    public Boolean canBeTruncated;
    public ColumnConfiguration withCanBeTruncated(Boolean canBeTruncated) {
        this.canBeTruncated = canBeTruncated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnCultureName")
    public String columnCultureName;
    public ColumnConfiguration withColumnCultureName(String columnCultureName) {
        this.columnCultureName = columnCultureName;
        return this;
    }
    @JsonProperty("columnDataType")
    public BeezUpCommonColumnDataTypeEnum columnDataType;
    public ColumnConfiguration withColumnDataType(BeezUpCommonColumnDataTypeEnum columnDataType) {
        this.columnDataType = columnDataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnFormat")
    public String columnFormat;
    public ColumnConfiguration withColumnFormat(String columnFormat) {
        this.columnFormat = columnFormat;
        return this;
    }
    @JsonProperty("columnImportance")
    public BeezUpCommonColumnImportanceEnum columnImportance;
    public ColumnConfiguration withColumnImportance(BeezUpCommonColumnImportanceEnum columnImportance) {
        this.columnImportance = columnImportance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayGroupName")
    public String displayGroupName;
    public ColumnConfiguration withDisplayGroupName(String displayGroupName) {
        this.displayGroupName = displayGroupName;
        return this;
    }
}