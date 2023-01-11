package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectCustomLabelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomLabels")
    public CustomLabel[] customLabels;
    public DetectCustomLabelsResponse withCustomLabels(CustomLabel[] customLabels) {
        this.customLabels = customLabels;
        return this;
    }
}