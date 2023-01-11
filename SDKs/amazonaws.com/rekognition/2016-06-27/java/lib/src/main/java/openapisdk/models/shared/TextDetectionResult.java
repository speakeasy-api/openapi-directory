package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TextDetectionResult
 * Information about text detected in a video. Incudes the detected text, the time in milliseconds from the start of the video that the text was detected, and where it was detected on the screen.
**/
public class TextDetectionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TextDetection")
    public TextDetection textDetection;
    public TextDetectionResult withTextDetection(TextDetection textDetection) {
        this.textDetection = textDetection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timestamp")
    public Long timestamp;
    public TextDetectionResult withTimestamp(Long timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}