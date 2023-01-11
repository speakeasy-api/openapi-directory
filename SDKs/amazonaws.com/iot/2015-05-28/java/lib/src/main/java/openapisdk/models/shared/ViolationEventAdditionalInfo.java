package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ViolationEventAdditionalInfo
 *  The details of a violation event. 
**/
public class ViolationEventAdditionalInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidenceLevel")
    public ConfidenceLevelEnum confidenceLevel;
    public ViolationEventAdditionalInfo withConfidenceLevel(ConfidenceLevelEnum confidenceLevel) {
        this.confidenceLevel = confidenceLevel;
        return this;
    }
}