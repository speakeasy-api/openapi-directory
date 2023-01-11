package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SsmValidationParameters
 * Contains validation parameters.
**/
public class SsmValidationParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("command")
    public String command;
    public SsmValidationParameters withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionTimeoutSeconds")
    public Long executionTimeoutSeconds;
    public SsmValidationParameters withExecutionTimeoutSeconds(Long executionTimeoutSeconds) {
        this.executionTimeoutSeconds = executionTimeoutSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceId")
    public String instanceId;
    public SsmValidationParameters withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputS3BucketName")
    public String outputS3BucketName;
    public SsmValidationParameters withOutputS3BucketName(String outputS3BucketName) {
        this.outputS3BucketName = outputS3BucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scriptType")
    public ScriptTypeEnum scriptType;
    public SsmValidationParameters withScriptType(ScriptTypeEnum scriptType) {
        this.scriptType = scriptType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public Source source;
    public SsmValidationParameters withSource(Source source) {
        this.source = source;
        return this;
    }
}