package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExpenseDetection
 * An object used to store information about the Value or Label detected by Amazon Textract.
**/
public class ExpenseDetection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Confidence")
    public Float confidence;
    public ExpenseDetection withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Geometry")
    public Geometry geometry;
    public ExpenseDetection withGeometry(Geometry geometry) {
        this.geometry = geometry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Text")
    public String text;
    public ExpenseDetection withText(String text) {
        this.text = text;
        return this;
    }
}