package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateStreamProcessorRequest {
    @JsonProperty("Input")
    public StreamProcessorInput input;
    public CreateStreamProcessorRequest withInput(StreamProcessorInput input) {
        this.input = input;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateStreamProcessorRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Output")
    public StreamProcessorOutput output;
    public CreateStreamProcessorRequest withOutput(StreamProcessorOutput output) {
        this.output = output;
        return this;
    }
    @JsonProperty("RoleArn")
    public String roleArn;
    public CreateStreamProcessorRequest withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("Settings")
    public StreamProcessorSettings settings;
    public CreateStreamProcessorRequest withSettings(StreamProcessorSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateStreamProcessorRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}