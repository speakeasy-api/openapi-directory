package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HovercardContexts {
    @JsonProperty("message")
    public String message;
    public HovercardContexts withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("octicon")
    public String octicon;
    public HovercardContexts withOcticon(String octicon) {
        this.octicon = octicon;
        return this;
    }
}