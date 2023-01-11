package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetContentModerationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobStatus")
    public VideoJobStatusEnum jobStatus;
    public GetContentModerationResponse withJobStatus(VideoJobStatusEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModerationLabels")
    public ContentModerationDetection[] moderationLabels;
    public GetContentModerationResponse withModerationLabels(ContentModerationDetection[] moderationLabels) {
        this.moderationLabels = moderationLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModerationModelVersion")
    public String moderationModelVersion;
    public GetContentModerationResponse withModerationModelVersion(String moderationModelVersion) {
        this.moderationModelVersion = moderationModelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetContentModerationResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusMessage")
    public String statusMessage;
    public GetContentModerationResponse withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VideoMetadata")
    public VideoMetadata videoMetadata;
    public GetContentModerationResponse withVideoMetadata(VideoMetadata videoMetadata) {
        this.videoMetadata = videoMetadata;
        return this;
    }
}