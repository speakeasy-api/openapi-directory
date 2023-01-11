package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TranslateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public TranslateRequest withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String[] text;
    public TranslateRequest withText(String[] text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public TranslateRequest withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translationContext")
    public String translationContext;
    public TranslateRequest withTranslationContext(String translationContext) {
        this.translationContext = translationContext;
        return this;
    }
}