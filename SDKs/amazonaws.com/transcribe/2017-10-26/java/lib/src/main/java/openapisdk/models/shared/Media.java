package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Media
 * Describes the input media file in a transcription request.
**/
public class Media {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MediaFileUri")
    public String mediaFileUri;
    public Media withMediaFileUri(String mediaFileUri) {
        this.mediaFileUri = mediaFileUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedactedMediaFileUri")
    public String redactedMediaFileUri;
    public Media withRedactedMediaFileUri(String redactedMediaFileUri) {
        this.redactedMediaFileUri = redactedMediaFileUri;
        return this;
    }
}