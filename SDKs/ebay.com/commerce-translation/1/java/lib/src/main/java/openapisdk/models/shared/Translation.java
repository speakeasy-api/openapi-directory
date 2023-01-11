package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Translation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public Translation withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalText")
    public String originalText;
    public Translation withOriginalText(String originalText) {
        this.originalText = originalText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public Translation withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translatedText")
    public String translatedText;
    public Translation withTranslatedText(String translatedText) {
        this.translatedText = translatedText;
        return this;
    }
}