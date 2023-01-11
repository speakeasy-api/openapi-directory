package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCelebrityRecognitionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Celebrities")
    public CelebrityRecognition[] celebrities;
    public GetCelebrityRecognitionResponse withCelebrities(CelebrityRecognition[] celebrities) {
        this.celebrities = celebrities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobStatus")
    public VideoJobStatusEnum jobStatus;
    public GetCelebrityRecognitionResponse withJobStatus(VideoJobStatusEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetCelebrityRecognitionResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusMessage")
    public String statusMessage;
    public GetCelebrityRecognitionResponse withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VideoMetadata")
    public VideoMetadata videoMetadata;
    public GetCelebrityRecognitionResponse withVideoMetadata(VideoMetadata videoMetadata) {
        this.videoMetadata = videoMetadata;
        return this;
    }
}