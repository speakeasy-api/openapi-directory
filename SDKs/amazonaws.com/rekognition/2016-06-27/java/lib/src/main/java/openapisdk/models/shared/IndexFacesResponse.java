package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IndexFacesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceModelVersion")
    public String faceModelVersion;
    public IndexFacesResponse withFaceModelVersion(String faceModelVersion) {
        this.faceModelVersion = faceModelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceRecords")
    public FaceRecord[] faceRecords;
    public IndexFacesResponse withFaceRecords(FaceRecord[] faceRecords) {
        this.faceRecords = faceRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrientationCorrection")
    public OrientationCorrectionEnum orientationCorrection;
    public IndexFacesResponse withOrientationCorrection(OrientationCorrectionEnum orientationCorrection) {
        this.orientationCorrection = orientationCorrection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnindexedFaces")
    public UnindexedFace[] unindexedFaces;
    public IndexFacesResponse withUnindexedFaces(UnindexedFace[] unindexedFaces) {
        this.unindexedFaces = unindexedFaces;
        return this;
    }
}