package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartDetectorModelAnalysisRequestBodyDetectorModelDefinition
 * Information that defines how a detector operates.
**/
public class StartDetectorModelAnalysisRequestBodyDetectorModelDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialStateName")
    public String initialStateName;
    public StartDetectorModelAnalysisRequestBodyDetectorModelDefinition withInitialStateName(String initialStateName) {
        this.initialStateName = initialStateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("states")
    public openapisdk.models.shared.State[] states;
    public StartDetectorModelAnalysisRequestBodyDetectorModelDefinition withStates(openapisdk.models.shared.State[] states) {
        this.states = states;
        return this;
    }
}