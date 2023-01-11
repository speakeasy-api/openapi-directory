package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCanaryRequestBody {
    @JsonProperty("ArtifactS3Location")
    public String artifactS3Location;
    public CreateCanaryRequestBody withArtifactS3Location(String artifactS3Location) {
        this.artifactS3Location = artifactS3Location;
        return this;
    }
    @JsonProperty("Code")
    public CreateCanaryRequestBodyCode code;
    public CreateCanaryRequestBody withCode(CreateCanaryRequestBodyCode code) {
        this.code = code;
        return this;
    }
    @JsonProperty("ExecutionRoleArn")
    public String executionRoleArn;
    public CreateCanaryRequestBody withExecutionRoleArn(String executionRoleArn) {
        this.executionRoleArn = executionRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureRetentionPeriodInDays")
    public Long failureRetentionPeriodInDays;
    public CreateCanaryRequestBody withFailureRetentionPeriodInDays(Long failureRetentionPeriodInDays) {
        this.failureRetentionPeriodInDays = failureRetentionPeriodInDays;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateCanaryRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RunConfig")
    public CreateCanaryRequestBodyRunConfig runConfig;
    public CreateCanaryRequestBody withRunConfig(CreateCanaryRequestBodyRunConfig runConfig) {
        this.runConfig = runConfig;
        return this;
    }
    @JsonProperty("RuntimeVersion")
    public String runtimeVersion;
    public CreateCanaryRequestBody withRuntimeVersion(String runtimeVersion) {
        this.runtimeVersion = runtimeVersion;
        return this;
    }
    @JsonProperty("Schedule")
    public CreateCanaryRequestBodySchedule schedule;
    public CreateCanaryRequestBody withSchedule(CreateCanaryRequestBodySchedule schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuccessRetentionPeriodInDays")
    public Long successRetentionPeriodInDays;
    public CreateCanaryRequestBody withSuccessRetentionPeriodInDays(Long successRetentionPeriodInDays) {
        this.successRetentionPeriodInDays = successRetentionPeriodInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateCanaryRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcConfig")
    public CreateCanaryRequestBodyVpcConfig vpcConfig;
    public CreateCanaryRequestBody withVpcConfig(CreateCanaryRequestBodyVpcConfig vpcConfig) {
        this.vpcConfig = vpcConfig;
        return this;
    }
}