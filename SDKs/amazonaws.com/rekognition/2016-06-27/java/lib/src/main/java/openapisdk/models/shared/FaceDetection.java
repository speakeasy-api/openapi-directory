package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FaceDetection
 * Information about a face detected in a video analysis request and the time the face was detected in the video. 
**/
public class FaceDetection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Face")
    public FaceDetail face;
    public FaceDetection withFace(FaceDetail face) {
        this.face = face;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timestamp")
    public Long timestamp;
    public FaceDetection withTimestamp(Long timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}