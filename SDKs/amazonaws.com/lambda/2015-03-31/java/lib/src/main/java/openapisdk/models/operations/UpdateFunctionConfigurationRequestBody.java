package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFunctionConfigurationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeadLetterConfig")
    public UpdateFunctionConfigurationRequestBodyDeadLetterConfig deadLetterConfig;
    public UpdateFunctionConfigurationRequestBody withDeadLetterConfig(UpdateFunctionConfigurationRequestBodyDeadLetterConfig deadLetterConfig) {
        this.deadLetterConfig = deadLetterConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateFunctionConfigurationRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Environment")
    public UpdateFunctionConfigurationRequestBodyEnvironment environment;
    public UpdateFunctionConfigurationRequestBody withEnvironment(UpdateFunctionConfigurationRequestBodyEnvironment environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileSystemConfigs")
    public openapisdk.models.shared.FileSystemConfig[] fileSystemConfigs;
    public UpdateFunctionConfigurationRequestBody withFileSystemConfigs(openapisdk.models.shared.FileSystemConfig[] fileSystemConfigs) {
        this.fileSystemConfigs = fileSystemConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Handler")
    public String handler;
    public UpdateFunctionConfigurationRequestBody withHandler(String handler) {
        this.handler = handler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageConfig")
    public UpdateFunctionConfigurationRequestBodyImageConfig imageConfig;
    public UpdateFunctionConfigurationRequestBody withImageConfig(UpdateFunctionConfigurationRequestBodyImageConfig imageConfig) {
        this.imageConfig = imageConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KMSKeyArn")
    public String kmsKeyArn;
    public UpdateFunctionConfigurationRequestBody withKmsKeyArn(String kmsKeyArn) {
        this.kmsKeyArn = kmsKeyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Layers")
    public String[] layers;
    public UpdateFunctionConfigurationRequestBody withLayers(String[] layers) {
        this.layers = layers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MemorySize")
    public Long memorySize;
    public UpdateFunctionConfigurationRequestBody withMemorySize(Long memorySize) {
        this.memorySize = memorySize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RevisionId")
    public String revisionId;
    public UpdateFunctionConfigurationRequestBody withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Role")
    public String role;
    public UpdateFunctionConfigurationRequestBody withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Runtime")
    public UpdateFunctionConfigurationRequestBodyRuntimeEnum runtime;
    public UpdateFunctionConfigurationRequestBody withRuntime(UpdateFunctionConfigurationRequestBodyRuntimeEnum runtime) {
        this.runtime = runtime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timeout")
    public Long timeout;
    public UpdateFunctionConfigurationRequestBody withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TracingConfig")
    public UpdateFunctionConfigurationRequestBodyTracingConfig tracingConfig;
    public UpdateFunctionConfigurationRequestBody withTracingConfig(UpdateFunctionConfigurationRequestBodyTracingConfig tracingConfig) {
        this.tracingConfig = tracingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcConfig")
    public UpdateFunctionConfigurationRequestBodyVpcConfig vpcConfig;
    public UpdateFunctionConfigurationRequestBody withVpcConfig(UpdateFunctionConfigurationRequestBodyVpcConfig vpcConfig) {
        this.vpcConfig = vpcConfig;
        return this;
    }
}