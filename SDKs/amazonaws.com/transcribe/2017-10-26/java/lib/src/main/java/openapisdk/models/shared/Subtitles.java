package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Subtitles
 * Generate subtitles for your batch transcription job.
**/
public class Subtitles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Formats")
    public SubtitleFormatEnum[] formats;
    public Subtitles withFormats(SubtitleFormatEnum[] formats) {
        this.formats = formats;
        return this;
    }
}