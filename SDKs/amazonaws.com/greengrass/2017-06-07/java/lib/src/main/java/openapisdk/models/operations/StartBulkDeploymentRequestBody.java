package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartBulkDeploymentRequestBody {
    @JsonProperty("ExecutionRoleArn")
    public String executionRoleArn;
    public StartBulkDeploymentRequestBody withExecutionRoleArn(String executionRoleArn) {
        this.executionRoleArn = executionRoleArn;
        return this;
    }
    @JsonProperty("InputFileUri")
    public String inputFileUri;
    public StartBulkDeploymentRequestBody withInputFileUri(String inputFileUri) {
        this.inputFileUri = inputFileUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public StartBulkDeploymentRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}