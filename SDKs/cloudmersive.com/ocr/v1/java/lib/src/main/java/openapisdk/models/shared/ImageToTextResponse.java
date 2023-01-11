package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageToTextResponse
 * Response from an OCR to text operation.  Includes the confience rating and converted text result.
**/
public class ImageToTextResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MeanConfidenceLevel")
    public Float meanConfidenceLevel;
    public ImageToTextResponse withMeanConfidenceLevel(Float meanConfidenceLevel) {
        this.meanConfidenceLevel = meanConfidenceLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TextResult")
    public String textResult;
    public ImageToTextResponse withTextResult(String textResult) {
        this.textResult = textResult;
        return this;
    }
}