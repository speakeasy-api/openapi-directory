package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AutomaticTransitionInfoListLinks {
    @JsonProperty("configure")
    public LinksConfigureAutomaticTransitionsLink configure;
    public AutomaticTransitionInfoListLinks withConfigure(LinksConfigureAutomaticTransitionsLink configure) {
        this.configure = configure;
        return this;
    }
    @JsonProperty("self")
    public LinksGetAutomaticTransitionsLink self;
    public AutomaticTransitionInfoListLinks withSelf(LinksGetAutomaticTransitionsLink self) {
        this.self = self;
        return this;
    }
}