package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTelemetryMetadataRequest {
    @JsonProperty("assessmentRunArn")
    public String assessmentRunArn;
    public GetTelemetryMetadataRequest withAssessmentRunArn(String assessmentRunArn) {
        this.assessmentRunArn = assessmentRunArn;
        return this;
    }
}