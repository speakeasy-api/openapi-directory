package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LabelDetection
 * Information about a label detected in a video analysis request and the time the label was detected in the video. 
**/
public class LabelDetection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Label")
    public Label label;
    public LabelDetection withLabel(Label label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timestamp")
    public Long timestamp;
    public LabelDetection withTimestamp(Long timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}