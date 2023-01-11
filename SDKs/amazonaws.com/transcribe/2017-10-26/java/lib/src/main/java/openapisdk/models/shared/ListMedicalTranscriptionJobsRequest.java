package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMedicalTranscriptionJobsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobNameContains")
    public String jobNameContains;
    public ListMedicalTranscriptionJobsRequest withJobNameContains(String jobNameContains) {
        this.jobNameContains = jobNameContains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListMedicalTranscriptionJobsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListMedicalTranscriptionJobsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public TranscriptionJobStatusEnum status;
    public ListMedicalTranscriptionJobsRequest withStatus(TranscriptionJobStatusEnum status) {
        this.status = status;
        return this;
    }
}