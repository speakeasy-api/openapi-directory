package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AutomaticTransitionInfoList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("automaticTransitionInfos")
    public AutomaticTransitionInfo[] automaticTransitionInfos;
    public AutomaticTransitionInfoList withAutomaticTransitionInfos(AutomaticTransitionInfo[] automaticTransitionInfos) {
        this.automaticTransitionInfos = automaticTransitionInfos;
        return this;
    }
    @JsonProperty("links")
    public AutomaticTransitionInfoListLinks links;
    public AutomaticTransitionInfoList withLinks(AutomaticTransitionInfoListLinks links) {
        this.links = links;
        return this;
    }
}