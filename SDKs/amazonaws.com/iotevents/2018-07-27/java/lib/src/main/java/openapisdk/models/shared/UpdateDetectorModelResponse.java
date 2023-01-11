package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDetectorModelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectorModelConfiguration")
    public DetectorModelConfiguration detectorModelConfiguration;
    public UpdateDetectorModelResponse withDetectorModelConfiguration(DetectorModelConfiguration detectorModelConfiguration) {
        this.detectorModelConfiguration = detectorModelConfiguration;
        return this;
    }
}