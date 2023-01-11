package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartFaceDetectionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public StartFaceDetectionRequest withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceAttributes")
    public FaceAttributesEnum faceAttributes;
    public StartFaceDetectionRequest withFaceAttributes(FaceAttributesEnum faceAttributes) {
        this.faceAttributes = faceAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobTag")
    public String jobTag;
    public StartFaceDetectionRequest withJobTag(String jobTag) {
        this.jobTag = jobTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotificationChannel")
    public NotificationChannel notificationChannel;
    public StartFaceDetectionRequest withNotificationChannel(NotificationChannel notificationChannel) {
        this.notificationChannel = notificationChannel;
        return this;
    }
    @JsonProperty("Video")
    public Video video;
    public StartFaceDetectionRequest withVideo(Video video) {
        this.video = video;
        return this;
    }
}