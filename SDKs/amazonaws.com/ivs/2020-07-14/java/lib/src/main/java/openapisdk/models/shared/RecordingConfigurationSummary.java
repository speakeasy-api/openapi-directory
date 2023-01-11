package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecordingConfigurationSummary
 * Summary information about a RecordingConfiguration.
**/
public class RecordingConfigurationSummary {
    @JsonProperty("arn")
    public String arn;
    public RecordingConfigurationSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("destinationConfiguration")
    public DestinationConfiguration destinationConfiguration;
    public RecordingConfigurationSummary withDestinationConfiguration(DestinationConfiguration destinationConfiguration) {
        this.destinationConfiguration = destinationConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RecordingConfigurationSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("state")
    public RecordingConfigurationStateEnum state;
    public RecordingConfigurationSummary withState(RecordingConfigurationStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public RecordingConfigurationSummary withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}