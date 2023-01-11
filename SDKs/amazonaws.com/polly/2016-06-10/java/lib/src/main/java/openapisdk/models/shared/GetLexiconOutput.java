package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLexiconOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Lexicon")
    public Lexicon lexicon;
    public GetLexiconOutput withLexicon(Lexicon lexicon) {
        this.lexicon = lexicon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LexiconAttributes")
    public LexiconAttributes lexiconAttributes;
    public GetLexiconOutput withLexiconAttributes(LexiconAttributes lexiconAttributes) {
        this.lexiconAttributes = lexiconAttributes;
        return this;
    }
}