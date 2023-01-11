package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomLabel
 * A custom label detected in an image by a call to <a>DetectCustomLabels</a>.
**/
public class CustomLabel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Confidence")
    public Float confidence;
    public CustomLabel withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Geometry")
    public Geometry geometry;
    public CustomLabel withGeometry(Geometry geometry) {
        this.geometry = geometry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CustomLabel withName(String name) {
        this.name = name;
        return this;
    }
}