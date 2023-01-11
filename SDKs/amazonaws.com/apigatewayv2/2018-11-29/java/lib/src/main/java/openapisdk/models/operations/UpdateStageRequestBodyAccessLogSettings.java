package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateStageRequestBodyAccessLogSettings
 * Settings for logging access in a stage.
**/
public class UpdateStageRequestBodyAccessLogSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationArn")
    public java.util.Map<String, Object> destinationArn;
    public UpdateStageRequestBodyAccessLogSettings withDestinationArn(java.util.Map<String, Object> destinationArn) {
        this.destinationArn = destinationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Format")
    public java.util.Map<String, Object> format;
    public UpdateStageRequestBodyAccessLogSettings withFormat(java.util.Map<String, Object> format) {
        this.format = format;
        return this;
    }
}