package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectLabelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LabelModelVersion")
    public String labelModelVersion;
    public DetectLabelsResponse withLabelModelVersion(String labelModelVersion) {
        this.labelModelVersion = labelModelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Labels")
    public Label[] labels;
    public DetectLabelsResponse withLabels(Label[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrientationCorrection")
    public OrientationCorrectionEnum orientationCorrection;
    public DetectLabelsResponse withOrientationCorrection(OrientationCorrectionEnum orientationCorrection) {
        this.orientationCorrection = orientationCorrection;
        return this;
    }
}