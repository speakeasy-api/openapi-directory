package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FaceMatch
 * Provides face metadata. In addition, it also provides the confidence in the match of this face with the input face.
**/
public class FaceMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Face")
    public Face face;
    public FaceMatch withFace(Face face) {
        this.face = face;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Similarity")
    public Float similarity;
    public FaceMatch withSimilarity(Float similarity) {
        this.similarity = similarity;
        return this;
    }
}