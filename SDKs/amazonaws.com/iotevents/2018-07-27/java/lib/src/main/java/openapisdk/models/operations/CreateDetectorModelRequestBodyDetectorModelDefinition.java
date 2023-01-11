package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDetectorModelRequestBodyDetectorModelDefinition
 * Information that defines how a detector operates.
**/
public class CreateDetectorModelRequestBodyDetectorModelDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialStateName")
    public String initialStateName;
    public CreateDetectorModelRequestBodyDetectorModelDefinition withInitialStateName(String initialStateName) {
        this.initialStateName = initialStateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("states")
    public openapisdk.models.shared.State[] states;
    public CreateDetectorModelRequestBodyDetectorModelDefinition withStates(openapisdk.models.shared.State[] states) {
        this.states = states;
        return this;
    }
}