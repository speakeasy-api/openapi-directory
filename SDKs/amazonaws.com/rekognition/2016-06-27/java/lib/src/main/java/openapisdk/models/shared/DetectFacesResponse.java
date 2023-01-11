package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectFacesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceDetails")
    public FaceDetail[] faceDetails;
    public DetectFacesResponse withFaceDetails(FaceDetail[] faceDetails) {
        this.faceDetails = faceDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrientationCorrection")
    public OrientationCorrectionEnum orientationCorrection;
    public DetectFacesResponse withOrientationCorrection(OrientationCorrectionEnum orientationCorrection) {
        this.orientationCorrection = orientationCorrection;
        return this;
    }
}