package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TelemetryMetadata
 * The metadata about the Amazon Inspector application data metrics collected by the agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action.
**/
public class TelemetryMetadata {
    @JsonProperty("count")
    public Long count;
    public TelemetryMetadata withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSize")
    public Long dataSize;
    public TelemetryMetadata withDataSize(Long dataSize) {
        this.dataSize = dataSize;
        return this;
    }
    @JsonProperty("messageType")
    public String messageType;
    public TelemetryMetadata withMessageType(String messageType) {
        this.messageType = messageType;
        return this;
    }
}