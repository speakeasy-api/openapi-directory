package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAssessmentFrameworkResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("framework")
    public Framework framework;
    public GetAssessmentFrameworkResponse withFramework(Framework framework) {
        this.framework = framework;
        return this;
    }
}