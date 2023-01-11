package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetGeneratedPolicyResponse {
    @JsonProperty("generatedPolicyResult")
    public GeneratedPolicyResult generatedPolicyResult;
    public GetGeneratedPolicyResponse withGeneratedPolicyResult(GeneratedPolicyResult generatedPolicyResult) {
        this.generatedPolicyResult = generatedPolicyResult;
        return this;
    }
    @JsonProperty("jobDetails")
    public JobDetails jobDetails;
    public GetGeneratedPolicyResponse withJobDetails(JobDetails jobDetails) {
        this.jobDetails = jobDetails;
        return this;
    }
}