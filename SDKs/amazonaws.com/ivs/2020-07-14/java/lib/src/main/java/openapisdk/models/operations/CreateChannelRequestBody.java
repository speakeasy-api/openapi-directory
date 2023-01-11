package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateChannelRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorized")
    public Boolean authorized;
    public CreateChannelRequestBody withAuthorized(Boolean authorized) {
        this.authorized = authorized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latencyMode")
    public CreateChannelRequestBodyLatencyModeEnum latencyMode;
    public CreateChannelRequestBody withLatencyMode(CreateChannelRequestBodyLatencyModeEnum latencyMode) {
        this.latencyMode = latencyMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateChannelRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordingConfigurationArn")
    public String recordingConfigurationArn;
    public CreateChannelRequestBody withRecordingConfigurationArn(String recordingConfigurationArn) {
        this.recordingConfigurationArn = recordingConfigurationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateChannelRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CreateChannelRequestBodyTypeEnum type;
    public CreateChannelRequestBody withType(CreateChannelRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}