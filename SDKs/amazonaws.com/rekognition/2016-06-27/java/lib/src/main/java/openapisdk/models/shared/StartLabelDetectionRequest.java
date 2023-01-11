package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartLabelDetectionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public StartLabelDetectionRequest withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobTag")
    public String jobTag;
    public StartLabelDetectionRequest withJobTag(String jobTag) {
        this.jobTag = jobTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinConfidence")
    public Float minConfidence;
    public StartLabelDetectionRequest withMinConfidence(Float minConfidence) {
        this.minConfidence = minConfidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotificationChannel")
    public NotificationChannel notificationChannel;
    public StartLabelDetectionRequest withNotificationChannel(NotificationChannel notificationChannel) {
        this.notificationChannel = notificationChannel;
        return this;
    }
    @JsonProperty("Video")
    public Video video;
    public StartLabelDetectionRequest withVideo(Video video) {
        this.video = video;
        return this;
    }
}