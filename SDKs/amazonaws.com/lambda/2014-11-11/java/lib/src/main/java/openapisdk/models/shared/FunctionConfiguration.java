package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * FunctionConfiguration
 * A complex type that describes function metadata.
**/
public class FunctionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeSize")
    public Long codeSize;
    public FunctionConfiguration withCodeSize(Long codeSize) {
        this.codeSize = codeSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationId")
    public String configurationId;
    public FunctionConfiguration withConfigurationId(String configurationId) {
        this.configurationId = configurationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public FunctionConfiguration withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FunctionARN")
    public String functionARN;
    public FunctionConfiguration withFunctionArn(String functionARN) {
        this.functionARN = functionARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FunctionName")
    public String functionName;
    public FunctionConfiguration withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Handler")
    public String handler;
    public FunctionConfiguration withHandler(String handler) {
        this.handler = handler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModified")
    public OffsetDateTime lastModified;
    public FunctionConfiguration withLastModified(OffsetDateTime lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MemorySize")
    public Long memorySize;
    public FunctionConfiguration withMemorySize(Long memorySize) {
        this.memorySize = memorySize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mode")
    public ModeEnum mode;
    public FunctionConfiguration withMode(ModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Role")
    public String role;
    public FunctionConfiguration withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Runtime")
    public RuntimeEnum runtime;
    public FunctionConfiguration withRuntime(RuntimeEnum runtime) {
        this.runtime = runtime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timeout")
    public Long timeout;
    public FunctionConfiguration withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
}