package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LexiconDescription
 * Describes the content of the lexicon.
**/
public class LexiconDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public LexiconAttributes attributes;
    public LexiconDescription withAttributes(LexiconAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public LexiconDescription withName(String name) {
        this.name = name;
        return this;
    }
}