package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBatchInferenceJobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchInferenceJobConfig")
    public BatchInferenceJobConfig batchInferenceJobConfig;
    public CreateBatchInferenceJobRequest withBatchInferenceJobConfig(BatchInferenceJobConfig batchInferenceJobConfig) {
        this.batchInferenceJobConfig = batchInferenceJobConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterArn")
    public String filterArn;
    public CreateBatchInferenceJobRequest withFilterArn(String filterArn) {
        this.filterArn = filterArn;
        return this;
    }
    @JsonProperty("jobInput")
    public BatchInferenceJobInput jobInput;
    public CreateBatchInferenceJobRequest withJobInput(BatchInferenceJobInput jobInput) {
        this.jobInput = jobInput;
        return this;
    }
    @JsonProperty("jobName")
    public String jobName;
    public CreateBatchInferenceJobRequest withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonProperty("jobOutput")
    public BatchInferenceJobOutput jobOutput;
    public CreateBatchInferenceJobRequest withJobOutput(BatchInferenceJobOutput jobOutput) {
        this.jobOutput = jobOutput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numResults")
    public Long numResults;
    public CreateBatchInferenceJobRequest withNumResults(Long numResults) {
        this.numResults = numResults;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public CreateBatchInferenceJobRequest withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("solutionVersionArn")
    public String solutionVersionArn;
    public CreateBatchInferenceJobRequest withSolutionVersionArn(String solutionVersionArn) {
        this.solutionVersionArn = solutionVersionArn;
        return this;
    }
}