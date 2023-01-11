package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PolicyDetails
 * Provides the details of a policy finding.
**/
public class PolicyDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public FindingAction action;
    public PolicyDetails withAction(FindingAction action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actor")
    public FindingActor actor;
    public PolicyDetails withActor(FindingActor actor) {
        this.actor = actor;
        return this;
    }
}