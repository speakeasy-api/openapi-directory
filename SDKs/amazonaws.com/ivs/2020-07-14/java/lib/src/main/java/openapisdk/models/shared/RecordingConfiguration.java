package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecordingConfiguration
 * An object representing a configuration to record a channel stream.
**/
public class RecordingConfiguration {
    @JsonProperty("arn")
    public String arn;
    public RecordingConfiguration withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("destinationConfiguration")
    public DestinationConfiguration destinationConfiguration;
    public RecordingConfiguration withDestinationConfiguration(DestinationConfiguration destinationConfiguration) {
        this.destinationConfiguration = destinationConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RecordingConfiguration withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("state")
    public RecordingConfigurationStateEnum state;
    public RecordingConfiguration withState(RecordingConfigurationStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public RecordingConfiguration withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}