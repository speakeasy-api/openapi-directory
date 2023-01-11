package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRecordingConfigurationRequestBody {
    @JsonProperty("destinationConfiguration")
    public CreateRecordingConfigurationRequestBodyDestinationConfiguration destinationConfiguration;
    public CreateRecordingConfigurationRequestBody withDestinationConfiguration(CreateRecordingConfigurationRequestBodyDestinationConfiguration destinationConfiguration) {
        this.destinationConfiguration = destinationConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateRecordingConfigurationRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateRecordingConfigurationRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}