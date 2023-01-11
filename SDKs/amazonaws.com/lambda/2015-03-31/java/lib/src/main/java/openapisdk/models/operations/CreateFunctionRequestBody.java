package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFunctionRequestBody {
    @JsonProperty("Code")
    public CreateFunctionRequestBodyCode code;
    public CreateFunctionRequestBody withCode(CreateFunctionRequestBodyCode code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeSigningConfigArn")
    public String codeSigningConfigArn;
    public CreateFunctionRequestBody withCodeSigningConfigArn(String codeSigningConfigArn) {
        this.codeSigningConfigArn = codeSigningConfigArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeadLetterConfig")
    public CreateFunctionRequestBodyDeadLetterConfig deadLetterConfig;
    public CreateFunctionRequestBody withDeadLetterConfig(CreateFunctionRequestBodyDeadLetterConfig deadLetterConfig) {
        this.deadLetterConfig = deadLetterConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateFunctionRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Environment")
    public CreateFunctionRequestBodyEnvironment environment;
    public CreateFunctionRequestBody withEnvironment(CreateFunctionRequestBodyEnvironment environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileSystemConfigs")
    public openapisdk.models.shared.FileSystemConfig[] fileSystemConfigs;
    public CreateFunctionRequestBody withFileSystemConfigs(openapisdk.models.shared.FileSystemConfig[] fileSystemConfigs) {
        this.fileSystemConfigs = fileSystemConfigs;
        return this;
    }
    @JsonProperty("FunctionName")
    public String functionName;
    public CreateFunctionRequestBody withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Handler")
    public String handler;
    public CreateFunctionRequestBody withHandler(String handler) {
        this.handler = handler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageConfig")
    public CreateFunctionRequestBodyImageConfig imageConfig;
    public CreateFunctionRequestBody withImageConfig(CreateFunctionRequestBodyImageConfig imageConfig) {
        this.imageConfig = imageConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KMSKeyArn")
    public String kmsKeyArn;
    public CreateFunctionRequestBody withKmsKeyArn(String kmsKeyArn) {
        this.kmsKeyArn = kmsKeyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Layers")
    public String[] layers;
    public CreateFunctionRequestBody withLayers(String[] layers) {
        this.layers = layers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MemorySize")
    public Long memorySize;
    public CreateFunctionRequestBody withMemorySize(Long memorySize) {
        this.memorySize = memorySize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PackageType")
    public CreateFunctionRequestBodyPackageTypeEnum packageType;
    public CreateFunctionRequestBody withPackageType(CreateFunctionRequestBodyPackageTypeEnum packageType) {
        this.packageType = packageType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Publish")
    public Boolean publish;
    public CreateFunctionRequestBody withPublish(Boolean publish) {
        this.publish = publish;
        return this;
    }
    @JsonProperty("Role")
    public String role;
    public CreateFunctionRequestBody withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Runtime")
    public CreateFunctionRequestBodyRuntimeEnum runtime;
    public CreateFunctionRequestBody withRuntime(CreateFunctionRequestBodyRuntimeEnum runtime) {
        this.runtime = runtime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateFunctionRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timeout")
    public Long timeout;
    public CreateFunctionRequestBody withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TracingConfig")
    public CreateFunctionRequestBodyTracingConfig tracingConfig;
    public CreateFunctionRequestBody withTracingConfig(CreateFunctionRequestBodyTracingConfig tracingConfig) {
        this.tracingConfig = tracingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcConfig")
    public CreateFunctionRequestBodyVpcConfig vpcConfig;
    public CreateFunctionRequestBody withVpcConfig(CreateFunctionRequestBodyVpcConfig vpcConfig) {
        this.vpcConfig = vpcConfig;
        return this;
    }
}