package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateStageResponseAccessLogSettings
 * Settings for logging access in this stage.
**/
public class CreateStageResponseAccessLogSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationArn")
    public java.util.Map<String, Object> destinationArn;
    public CreateStageResponseAccessLogSettings withDestinationArn(java.util.Map<String, Object> destinationArn) {
        this.destinationArn = destinationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Format")
    public java.util.Map<String, Object> format;
    public CreateStageResponseAccessLogSettings withFormat(java.util.Map<String, Object> format) {
        this.format = format;
        return this;
    }
}