package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelColumnConfiguration
 * The channel column configuration. The BeezUP Column Name is optional. If the BeezUP column is mapped we will indicate the data type and column importance of the BeezUP column.
**/
public class ChannelColumnConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beezUPColumnName")
    public String beezUPColumnName;
    public ChannelColumnConfiguration withBeezUpColumnName(String beezUPColumnName) {
        this.beezUPColumnName = beezUPColumnName;
        return this;
    }
    @JsonProperty("columnDataType")
    public BeezUpCommonColumnDataTypeEnum columnDataType;
    public ChannelColumnConfiguration withColumnDataType(BeezUpCommonColumnDataTypeEnum columnDataType) {
        this.columnDataType = columnDataType;
        return this;
    }
    @JsonProperty("columnImportance")
    public BeezUpCommonColumnImportanceEnum columnImportance;
    public ChannelColumnConfiguration withColumnImportance(BeezUpCommonColumnImportanceEnum columnImportance) {
        this.columnImportance = columnImportance;
        return this;
    }
}