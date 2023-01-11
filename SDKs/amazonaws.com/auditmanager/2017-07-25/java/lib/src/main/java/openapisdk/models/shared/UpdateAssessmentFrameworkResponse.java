package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAssessmentFrameworkResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("framework")
    public Framework framework;
    public UpdateAssessmentFrameworkResponse withFramework(Framework framework) {
        this.framework = framework;
        return this;
    }
}