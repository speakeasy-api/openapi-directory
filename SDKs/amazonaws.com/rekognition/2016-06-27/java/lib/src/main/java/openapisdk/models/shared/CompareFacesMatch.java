package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompareFacesMatch
 * Provides information about a face in a target image that matches the source image face analyzed by <code>CompareFaces</code>. The <code>Face</code> property contains the bounding box of the face in the target image. The <code>Similarity</code> property is the confidence that the source image face matches the face in the bounding box.
**/
public class CompareFacesMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Face")
    public ComparedFace face;
    public CompareFacesMatch withFace(ComparedFace face) {
        this.face = face;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Similarity")
    public Float similarity;
    public CompareFacesMatch withSimilarity(Float similarity) {
        this.similarity = similarity;
        return this;
    }
}