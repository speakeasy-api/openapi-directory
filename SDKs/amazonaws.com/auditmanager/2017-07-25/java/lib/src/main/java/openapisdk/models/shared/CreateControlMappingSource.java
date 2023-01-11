package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateControlMappingSource
 *  Control mapping fields that represent the source for evidence collection, along with related parameters and metadata. This does not contain <code>mappingID</code>. 
**/
public class CreateControlMappingSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceDescription")
    public String sourceDescription;
    public CreateControlMappingSource withSourceDescription(String sourceDescription) {
        this.sourceDescription = sourceDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceFrequency")
    public SourceFrequencyEnum sourceFrequency;
    public CreateControlMappingSource withSourceFrequency(SourceFrequencyEnum sourceFrequency) {
        this.sourceFrequency = sourceFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceKeyword")
    public SourceKeyword sourceKeyword;
    public CreateControlMappingSource withSourceKeyword(SourceKeyword sourceKeyword) {
        this.sourceKeyword = sourceKeyword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceName")
    public String sourceName;
    public CreateControlMappingSource withSourceName(String sourceName) {
        this.sourceName = sourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceSetUpOption")
    public SourceSetUpOptionEnum sourceSetUpOption;
    public CreateControlMappingSource withSourceSetUpOption(SourceSetUpOptionEnum sourceSetUpOption) {
        this.sourceSetUpOption = sourceSetUpOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceType")
    public SourceTypeEnum sourceType;
    public CreateControlMappingSource withSourceType(SourceTypeEnum sourceType) {
        this.sourceType = sourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("troubleshootingText")
    public String troubleshootingText;
    public CreateControlMappingSource withTroubleshootingText(String troubleshootingText) {
        this.troubleshootingText = troubleshootingText;
        return this;
    }
}