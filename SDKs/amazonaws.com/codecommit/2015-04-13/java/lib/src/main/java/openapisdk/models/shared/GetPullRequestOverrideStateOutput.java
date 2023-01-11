package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPullRequestOverrideStateOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overridden")
    public Boolean overridden;
    public GetPullRequestOverrideStateOutput withOverridden(Boolean overridden) {
        this.overridden = overridden;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overrider")
    public String overrider;
    public GetPullRequestOverrideStateOutput withOverrider(String overrider) {
        this.overrider = overrider;
        return this;
    }
}