package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTranscriptionJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListTranscriptionJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public TranscriptionJobStatusEnum status;
    public ListTranscriptionJobsResponse withStatus(TranscriptionJobStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TranscriptionJobSummaries")
    public TranscriptionJobSummary[] transcriptionJobSummaries;
    public ListTranscriptionJobsResponse withTranscriptionJobSummaries(TranscriptionJobSummary[] transcriptionJobSummaries) {
        this.transcriptionJobSummaries = transcriptionJobSummaries;
        return this;
    }
}