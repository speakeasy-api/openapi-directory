package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDetectorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detector")
    public Detector detector;
    public DescribeDetectorResponse withDetector(Detector detector) {
        this.detector = detector;
        return this;
    }
}