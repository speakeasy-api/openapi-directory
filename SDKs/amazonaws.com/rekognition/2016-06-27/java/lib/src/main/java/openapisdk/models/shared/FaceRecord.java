package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FaceRecord
 * Object containing both the face metadata (stored in the backend database), and facial attributes that are detected but aren't stored in the database.
**/
public class FaceRecord {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Face")
    public Face face;
    public FaceRecord withFace(Face face) {
        this.face = face;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceDetail")
    public FaceDetail faceDetail;
    public FaceRecord withFaceDetail(FaceDetail faceDetail) {
        this.faceDetail = faceDetail;
        return this;
    }
}