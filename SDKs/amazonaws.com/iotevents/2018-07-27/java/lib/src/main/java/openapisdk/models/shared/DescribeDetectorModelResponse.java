package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDetectorModelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectorModel")
    public DetectorModel detectorModel;
    public DescribeDetectorModelResponse withDetectorModel(DetectorModel detectorModel) {
        this.detectorModel = detectorModel;
        return this;
    }
}