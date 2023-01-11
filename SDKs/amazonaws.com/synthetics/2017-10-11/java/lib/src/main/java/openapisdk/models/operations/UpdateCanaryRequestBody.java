package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCanaryRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public UpdateCanaryRequestBodyCode code;
    public UpdateCanaryRequestBody withCode(UpdateCanaryRequestBodyCode code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecutionRoleArn")
    public String executionRoleArn;
    public UpdateCanaryRequestBody withExecutionRoleArn(String executionRoleArn) {
        this.executionRoleArn = executionRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureRetentionPeriodInDays")
    public Long failureRetentionPeriodInDays;
    public UpdateCanaryRequestBody withFailureRetentionPeriodInDays(Long failureRetentionPeriodInDays) {
        this.failureRetentionPeriodInDays = failureRetentionPeriodInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RunConfig")
    public UpdateCanaryRequestBodyRunConfig runConfig;
    public UpdateCanaryRequestBody withRunConfig(UpdateCanaryRequestBodyRunConfig runConfig) {
        this.runConfig = runConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuntimeVersion")
    public String runtimeVersion;
    public UpdateCanaryRequestBody withRuntimeVersion(String runtimeVersion) {
        this.runtimeVersion = runtimeVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schedule")
    public UpdateCanaryRequestBodySchedule schedule;
    public UpdateCanaryRequestBody withSchedule(UpdateCanaryRequestBodySchedule schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuccessRetentionPeriodInDays")
    public Long successRetentionPeriodInDays;
    public UpdateCanaryRequestBody withSuccessRetentionPeriodInDays(Long successRetentionPeriodInDays) {
        this.successRetentionPeriodInDays = successRetentionPeriodInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VisualReference")
    public UpdateCanaryRequestBodyVisualReference visualReference;
    public UpdateCanaryRequestBody withVisualReference(UpdateCanaryRequestBodyVisualReference visualReference) {
        this.visualReference = visualReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcConfig")
    public UpdateCanaryRequestBodyVpcConfig vpcConfig;
    public UpdateCanaryRequestBody withVpcConfig(UpdateCanaryRequestBodyVpcConfig vpcConfig) {
        this.vpcConfig = vpcConfig;
        return this;
    }
}