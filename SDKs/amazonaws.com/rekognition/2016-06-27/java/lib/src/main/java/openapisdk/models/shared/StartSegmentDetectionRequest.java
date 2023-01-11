package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartSegmentDetectionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public StartSegmentDetectionRequest withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public StartSegmentDetectionFilters filters;
    public StartSegmentDetectionRequest withFilters(StartSegmentDetectionFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobTag")
    public String jobTag;
    public StartSegmentDetectionRequest withJobTag(String jobTag) {
        this.jobTag = jobTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotificationChannel")
    public NotificationChannel notificationChannel;
    public StartSegmentDetectionRequest withNotificationChannel(NotificationChannel notificationChannel) {
        this.notificationChannel = notificationChannel;
        return this;
    }
    @JsonProperty("SegmentTypes")
    public SegmentTypeEnum[] segmentTypes;
    public StartSegmentDetectionRequest withSegmentTypes(SegmentTypeEnum[] segmentTypes) {
        this.segmentTypes = segmentTypes;
        return this;
    }
    @JsonProperty("Video")
    public Video video;
    public StartSegmentDetectionRequest withVideo(Video video) {
        this.video = video;
        return this;
    }
}