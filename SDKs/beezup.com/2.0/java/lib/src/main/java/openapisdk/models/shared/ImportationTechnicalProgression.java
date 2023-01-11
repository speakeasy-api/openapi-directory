package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportationTechnicalProgression {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stepsProgression")
    public java.util.Map<String, String[]> stepsProgression;
    public ImportationTechnicalProgression withStepsProgression(java.util.Map<String, String[]> stepsProgression) {
        this.stepsProgression = stepsProgression;
        return this;
    }
}