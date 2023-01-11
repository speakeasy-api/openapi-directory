package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartFaceSearchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public StartFaceSearchRequest withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("CollectionId")
    public String collectionId;
    public StartFaceSearchRequest withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceMatchThreshold")
    public Float faceMatchThreshold;
    public StartFaceSearchRequest withFaceMatchThreshold(Float faceMatchThreshold) {
        this.faceMatchThreshold = faceMatchThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobTag")
    public String jobTag;
    public StartFaceSearchRequest withJobTag(String jobTag) {
        this.jobTag = jobTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotificationChannel")
    public NotificationChannel notificationChannel;
    public StartFaceSearchRequest withNotificationChannel(NotificationChannel notificationChannel) {
        this.notificationChannel = notificationChannel;
        return this;
    }
    @JsonProperty("Video")
    public Video video;
    public StartFaceSearchRequest withVideo(Video video) {
        this.video = video;
        return this;
    }
}