package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartTextDetectionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public StartTextDetectionRequest withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public StartTextDetectionFilters filters;
    public StartTextDetectionRequest withFilters(StartTextDetectionFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobTag")
    public String jobTag;
    public StartTextDetectionRequest withJobTag(String jobTag) {
        this.jobTag = jobTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotificationChannel")
    public NotificationChannel notificationChannel;
    public StartTextDetectionRequest withNotificationChannel(NotificationChannel notificationChannel) {
        this.notificationChannel = notificationChannel;
        return this;
    }
    @JsonProperty("Video")
    public Video video;
    public StartTextDetectionRequest withVideo(Video video) {
        this.video = video;
        return this;
    }
}