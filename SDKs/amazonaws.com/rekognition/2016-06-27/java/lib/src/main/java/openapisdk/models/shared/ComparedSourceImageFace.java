package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComparedSourceImageFace
 * Type that describes the face Amazon Rekognition chose to compare with the faces in the target. This contains a bounding box for the selected face and confidence level that the bounding box contains a face. Note that Amazon Rekognition selects the largest face in the source image for this comparison. 
**/
public class ComparedSourceImageFace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BoundingBox")
    public BoundingBox boundingBox;
    public ComparedSourceImageFace withBoundingBox(BoundingBox boundingBox) {
        this.boundingBox = boundingBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Confidence")
    public Float confidence;
    public ComparedSourceImageFace withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
}