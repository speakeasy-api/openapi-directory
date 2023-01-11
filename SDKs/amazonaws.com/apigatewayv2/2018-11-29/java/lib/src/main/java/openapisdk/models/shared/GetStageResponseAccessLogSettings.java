package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetStageResponseAccessLogSettings
 * Settings for logging access in this stage.
**/
public class GetStageResponseAccessLogSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationArn")
    public java.util.Map<String, Object> destinationArn;
    public GetStageResponseAccessLogSettings withDestinationArn(java.util.Map<String, Object> destinationArn) {
        this.destinationArn = destinationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Format")
    public java.util.Map<String, Object> format;
    public GetStageResponseAccessLogSettings withFormat(java.util.Map<String, Object> format) {
        this.format = format;
        return this;
    }
}