package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ControlMappingSource
 *  The data source that determines from where Audit Manager collects evidence for the control. 
**/
public class ControlMappingSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceDescription")
    public String sourceDescription;
    public ControlMappingSource withSourceDescription(String sourceDescription) {
        this.sourceDescription = sourceDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceFrequency")
    public SourceFrequencyEnum sourceFrequency;
    public ControlMappingSource withSourceFrequency(SourceFrequencyEnum sourceFrequency) {
        this.sourceFrequency = sourceFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceId")
    public String sourceId;
    public ControlMappingSource withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceKeyword")
    public SourceKeyword sourceKeyword;
    public ControlMappingSource withSourceKeyword(SourceKeyword sourceKeyword) {
        this.sourceKeyword = sourceKeyword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceName")
    public String sourceName;
    public ControlMappingSource withSourceName(String sourceName) {
        this.sourceName = sourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceSetUpOption")
    public SourceSetUpOptionEnum sourceSetUpOption;
    public ControlMappingSource withSourceSetUpOption(SourceSetUpOptionEnum sourceSetUpOption) {
        this.sourceSetUpOption = sourceSetUpOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceType")
    public SourceTypeEnum sourceType;
    public ControlMappingSource withSourceType(SourceTypeEnum sourceType) {
        this.sourceType = sourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("troubleshootingText")
    public String troubleshootingText;
    public ControlMappingSource withTroubleshootingText(String troubleshootingText) {
        this.troubleshootingText = troubleshootingText;
        return this;
    }
}