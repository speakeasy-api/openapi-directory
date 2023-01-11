package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DefinitionDocument
 * A document that defines an entity. 
**/
public class DefinitionDocument {
    @JsonProperty("language")
    public DefinitionLanguageEnum language;
    public DefinitionDocument withLanguage(DefinitionLanguageEnum language) {
        this.language = language;
        return this;
    }
    @JsonProperty("text")
    public String text;
    public DefinitionDocument withText(String text) {
        this.text = text;
        return this;
    }
}