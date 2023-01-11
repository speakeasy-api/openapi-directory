package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMedicalTranscriptionJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MedicalTranscriptionJobSummaries")
    public MedicalTranscriptionJobSummary[] medicalTranscriptionJobSummaries;
    public ListMedicalTranscriptionJobsResponse withMedicalTranscriptionJobSummaries(MedicalTranscriptionJobSummary[] medicalTranscriptionJobSummaries) {
        this.medicalTranscriptionJobSummaries = medicalTranscriptionJobSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListMedicalTranscriptionJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public TranscriptionJobStatusEnum status;
    public ListMedicalTranscriptionJobsResponse withStatus(TranscriptionJobStatusEnum status) {
        this.status = status;
        return this;
    }
}