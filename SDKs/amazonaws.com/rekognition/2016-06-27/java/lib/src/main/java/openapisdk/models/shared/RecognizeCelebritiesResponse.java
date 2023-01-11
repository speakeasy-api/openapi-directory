package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RecognizeCelebritiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CelebrityFaces")
    public Celebrity[] celebrityFaces;
    public RecognizeCelebritiesResponse withCelebrityFaces(Celebrity[] celebrityFaces) {
        this.celebrityFaces = celebrityFaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrientationCorrection")
    public OrientationCorrectionEnum orientationCorrection;
    public RecognizeCelebritiesResponse withOrientationCorrection(OrientationCorrectionEnum orientationCorrection) {
        this.orientationCorrection = orientationCorrection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnrecognizedFaces")
    public ComparedFace[] unrecognizedFaces;
    public RecognizeCelebritiesResponse withUnrecognizedFaces(ComparedFace[] unrecognizedFaces) {
        this.unrecognizedFaces = unrecognizedFaces;
        return this;
    }
}