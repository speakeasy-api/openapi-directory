package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubtitlesOutput
 * Specify the output format for your subtitle file.
**/
public class SubtitlesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Formats")
    public SubtitleFormatEnum[] formats;
    public SubtitlesOutput withFormats(SubtitleFormatEnum[] formats) {
        this.formats = formats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubtitleFileUris")
    public String[] subtitleFileUris;
    public SubtitlesOutput withSubtitleFileUris(String[] subtitleFileUris) {
        this.subtitleFileUris = subtitleFileUris;
        return this;
    }
}