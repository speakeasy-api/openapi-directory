package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFaceSearchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobStatus")
    public VideoJobStatusEnum jobStatus;
    public GetFaceSearchResponse withJobStatus(VideoJobStatusEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetFaceSearchResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Persons")
    public PersonMatch[] persons;
    public GetFaceSearchResponse withPersons(PersonMatch[] persons) {
        this.persons = persons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusMessage")
    public String statusMessage;
    public GetFaceSearchResponse withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VideoMetadata")
    public VideoMetadata videoMetadata;
    public GetFaceSearchResponse withVideoMetadata(VideoMetadata videoMetadata) {
        this.videoMetadata = videoMetadata;
        return this;
    }
}