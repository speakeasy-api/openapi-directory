package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InputContext
 * The name of a context that must be active for an intent to be selected by Amazon Lex.
**/
public class InputContext {
    @JsonProperty("name")
    public String name;
    public InputContext withName(String name) {
        this.name = name;
        return this;
    }
}