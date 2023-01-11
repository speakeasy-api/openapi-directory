package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateStageResponseAccessLogSettings
 * Settings for logging access in this stage.
**/
public class UpdateStageResponseAccessLogSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationArn")
    public java.util.Map<String, Object> destinationArn;
    public UpdateStageResponseAccessLogSettings withDestinationArn(java.util.Map<String, Object> destinationArn) {
        this.destinationArn = destinationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Format")
    public java.util.Map<String, Object> format;
    public UpdateStageResponseAccessLogSettings withFormat(java.util.Map<String, Object> format) {
        this.format = format;
        return this;
    }
}