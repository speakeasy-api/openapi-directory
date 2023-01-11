package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDetectorRequest
 * Information used to update the detector (instance).
**/
public class UpdateDetectorRequest {
    @JsonProperty("detectorModelName")
    public String detectorModelName;
    public UpdateDetectorRequest withDetectorModelName(String detectorModelName) {
        this.detectorModelName = detectorModelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyValue")
    public String keyValue;
    public UpdateDetectorRequest withKeyValue(String keyValue) {
        this.keyValue = keyValue;
        return this;
    }
    @JsonProperty("messageId")
    public String messageId;
    public UpdateDetectorRequest withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
    @JsonProperty("state")
    public DetectorStateDefinition state;
    public UpdateDetectorRequest withState(DetectorStateDefinition state) {
        this.state = state;
        return this;
    }
}