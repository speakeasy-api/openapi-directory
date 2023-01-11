package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgeRange
 * <p>Structure containing the estimated age range, in years, for a face.</p> <p>Amazon Rekognition estimates an age range for faces detected in the input image. Estimated age ranges can overlap. A face of a 5-year-old might have an estimated range of 4-6, while the face of a 6-year-old might have an estimated range of 4-8.</p>
**/
public class AgeRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("High")
    public Long high;
    public AgeRange withHigh(Long high) {
        this.high = high;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Low")
    public Long low;
    public AgeRange withLow(Long low) {
        this.low = low;
        return this;
    }
}