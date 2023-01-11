package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateChannelRequestBody {
    @JsonProperty("arn")
    public String arn;
    public UpdateChannelRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorized")
    public Boolean authorized;
    public UpdateChannelRequestBody withAuthorized(Boolean authorized) {
        this.authorized = authorized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latencyMode")
    public UpdateChannelRequestBodyLatencyModeEnum latencyMode;
    public UpdateChannelRequestBody withLatencyMode(UpdateChannelRequestBodyLatencyModeEnum latencyMode) {
        this.latencyMode = latencyMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateChannelRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordingConfigurationArn")
    public String recordingConfigurationArn;
    public UpdateChannelRequestBody withRecordingConfigurationArn(String recordingConfigurationArn) {
        this.recordingConfigurationArn = recordingConfigurationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UpdateChannelRequestBodyTypeEnum type;
    public UpdateChannelRequestBody withType(UpdateChannelRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}