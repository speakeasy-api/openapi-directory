package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartProjectVersionRequest {
    @JsonProperty("MinInferenceUnits")
    public Long minInferenceUnits;
    public StartProjectVersionRequest withMinInferenceUnits(Long minInferenceUnits) {
        this.minInferenceUnits = minInferenceUnits;
        return this;
    }
    @JsonProperty("ProjectVersionArn")
    public String projectVersionArn;
    public StartProjectVersionRequest withProjectVersionArn(String projectVersionArn) {
        this.projectVersionArn = projectVersionArn;
        return this;
    }
}