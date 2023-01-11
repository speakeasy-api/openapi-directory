package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContentModerationDetection
 * Information about an inappropriate, unwanted, or offensive content label detection in a stored video.
**/
public class ContentModerationDetection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModerationLabel")
    public ModerationLabel moderationLabel;
    public ContentModerationDetection withModerationLabel(ModerationLabel moderationLabel) {
        this.moderationLabel = moderationLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timestamp")
    public Long timestamp;
    public ContentModerationDetection withTimestamp(Long timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}