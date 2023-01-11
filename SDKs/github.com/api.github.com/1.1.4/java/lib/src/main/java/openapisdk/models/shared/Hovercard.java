package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Hovercard
 * Hovercard
**/
public class Hovercard {
    @JsonProperty("contexts")
    public HovercardContexts[] contexts;
    public Hovercard withContexts(HovercardContexts[] contexts) {
        this.contexts = contexts;
        return this;
    }
}