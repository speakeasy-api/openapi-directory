package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AutomaticTransitionInfoLinks {
    @JsonProperty("configure")
    public LinksConfigureAutomaticTransitionsLink configure;
    public AutomaticTransitionInfoLinks withConfigure(LinksConfigureAutomaticTransitionsLink configure) {
        this.configure = configure;
        return this;
    }
}