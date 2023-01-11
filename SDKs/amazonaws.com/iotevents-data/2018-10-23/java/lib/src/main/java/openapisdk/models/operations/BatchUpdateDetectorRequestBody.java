package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchUpdateDetectorRequestBody {
    @JsonProperty("detectors")
    public openapisdk.models.shared.UpdateDetectorRequest[] detectors;
    public BatchUpdateDetectorRequestBody withDetectors(openapisdk.models.shared.UpdateDetectorRequest[] detectors) {
        this.detectors = detectors;
        return this;
    }
}