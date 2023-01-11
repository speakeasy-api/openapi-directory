package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSegmentDetectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AudioMetadata")
    public AudioMetadata[] audioMetadata;
    public GetSegmentDetectionResponse withAudioMetadata(AudioMetadata[] audioMetadata) {
        this.audioMetadata = audioMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobStatus")
    public VideoJobStatusEnum jobStatus;
    public GetSegmentDetectionResponse withJobStatus(VideoJobStatusEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetSegmentDetectionResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Segments")
    public SegmentDetection[] segments;
    public GetSegmentDetectionResponse withSegments(SegmentDetection[] segments) {
        this.segments = segments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SelectedSegmentTypes")
    public SegmentTypeInfo[] selectedSegmentTypes;
    public GetSegmentDetectionResponse withSelectedSegmentTypes(SegmentTypeInfo[] selectedSegmentTypes) {
        this.selectedSegmentTypes = selectedSegmentTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusMessage")
    public String statusMessage;
    public GetSegmentDetectionResponse withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VideoMetadata")
    public VideoMetadata[] videoMetadata;
    public GetSegmentDetectionResponse withVideoMetadata(VideoMetadata[] videoMetadata) {
        this.videoMetadata = videoMetadata;
        return this;
    }
}