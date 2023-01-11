package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BeezUpColumnConfiguration
 * Describe a BeezUP column
**/
public class BeezUpColumnConfiguration {
    @JsonProperty("beezUPColumnName")
    public String beezUPColumnName;
    public BeezUpColumnConfiguration withBeezUpColumnName(String beezUPColumnName) {
        this.beezUPColumnName = beezUPColumnName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canBeTruncated")
    public Boolean canBeTruncated;
    public BeezUpColumnConfiguration withCanBeTruncated(Boolean canBeTruncated) {
        this.canBeTruncated = canBeTruncated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnDataType")
    public BeezUpCommonColumnDataTypeEnum columnDataType;
    public BeezUpColumnConfiguration withColumnDataType(BeezUpCommonColumnDataTypeEnum columnDataType) {
        this.columnDataType = columnDataType;
        return this;
    }
    @JsonProperty("columnImportance")
    public BeezUpCommonColumnImportanceEnum columnImportance;
    public BeezUpColumnConfiguration withColumnImportance(BeezUpCommonColumnImportanceEnum columnImportance) {
        this.columnImportance = columnImportance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BeezUpColumnConfiguration withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("displayGroupName")
    public String displayGroupName;
    public BeezUpColumnConfiguration withDisplayGroupName(String displayGroupName) {
        this.displayGroupName = displayGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unique")
    public Boolean unique;
    public BeezUpColumnConfiguration withUnique(Boolean unique) {
        this.unique = unique;
        return this;
    }
}