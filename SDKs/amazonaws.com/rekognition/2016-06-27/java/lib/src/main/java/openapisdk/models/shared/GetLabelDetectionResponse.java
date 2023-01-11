package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLabelDetectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobStatus")
    public VideoJobStatusEnum jobStatus;
    public GetLabelDetectionResponse withJobStatus(VideoJobStatusEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LabelModelVersion")
    public String labelModelVersion;
    public GetLabelDetectionResponse withLabelModelVersion(String labelModelVersion) {
        this.labelModelVersion = labelModelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Labels")
    public LabelDetection[] labels;
    public GetLabelDetectionResponse withLabels(LabelDetection[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetLabelDetectionResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusMessage")
    public String statusMessage;
    public GetLabelDetectionResponse withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VideoMetadata")
    public VideoMetadata videoMetadata;
    public GetLabelDetectionResponse withVideoMetadata(VideoMetadata videoMetadata) {
        this.videoMetadata = videoMetadata;
        return this;
    }
}