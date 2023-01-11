package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetectorStateSummary
 * Information about the detector state.
**/
public class DetectorStateSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateName")
    public String stateName;
    public DetectorStateSummary withStateName(String stateName) {
        this.stateName = stateName;
        return this;
    }
}