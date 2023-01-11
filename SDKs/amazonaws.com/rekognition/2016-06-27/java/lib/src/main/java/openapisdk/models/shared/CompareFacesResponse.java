package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CompareFacesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceMatches")
    public CompareFacesMatch[] faceMatches;
    public CompareFacesResponse withFaceMatches(CompareFacesMatch[] faceMatches) {
        this.faceMatches = faceMatches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceImageFace")
    public ComparedSourceImageFace sourceImageFace;
    public CompareFacesResponse withSourceImageFace(ComparedSourceImageFace sourceImageFace) {
        this.sourceImageFace = sourceImageFace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceImageOrientationCorrection")
    public OrientationCorrectionEnum sourceImageOrientationCorrection;
    public CompareFacesResponse withSourceImageOrientationCorrection(OrientationCorrectionEnum sourceImageOrientationCorrection) {
        this.sourceImageOrientationCorrection = sourceImageOrientationCorrection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetImageOrientationCorrection")
    public OrientationCorrectionEnum targetImageOrientationCorrection;
    public CompareFacesResponse withTargetImageOrientationCorrection(OrientationCorrectionEnum targetImageOrientationCorrection) {
        this.targetImageOrientationCorrection = targetImageOrientationCorrection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnmatchedFaces")
    public ComparedFace[] unmatchedFaces;
    public CompareFacesResponse withUnmatchedFaces(ComparedFace[] unmatchedFaces) {
        this.unmatchedFaces = unmatchedFaces;
        return this;
    }
}