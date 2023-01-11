package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTargetsForPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextMarker")
    public String nextMarker;
    public ListTargetsForPolicyResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public String[] targets;
    public ListTargetsForPolicyResponse withTargets(String[] targets) {
        this.targets = targets;
        return this;
    }
}