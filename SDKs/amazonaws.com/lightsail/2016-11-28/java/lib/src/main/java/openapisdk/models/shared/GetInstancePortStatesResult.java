package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInstancePortStatesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portStates")
    public InstancePortState[] portStates;
    public GetInstancePortStatesResult withPortStates(InstancePortState[] portStates) {
        this.portStates = portStates;
        return this;
    }
}