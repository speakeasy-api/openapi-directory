package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMlTransformRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateMlTransformRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GlueVersion")
    public String glueVersion;
    public CreateMlTransformRequest withGlueVersion(String glueVersion) {
        this.glueVersion = glueVersion;
        return this;
    }
    @JsonProperty("InputRecordTables")
    public GlueTable[] inputRecordTables;
    public CreateMlTransformRequest withInputRecordTables(GlueTable[] inputRecordTables) {
        this.inputRecordTables = inputRecordTables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxCapacity")
    public Double maxCapacity;
    public CreateMlTransformRequest withMaxCapacity(Double maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxRetries")
    public Long maxRetries;
    public CreateMlTransformRequest withMaxRetries(Long maxRetries) {
        this.maxRetries = maxRetries;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateMlTransformRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfWorkers")
    public Long numberOfWorkers;
    public CreateMlTransformRequest withNumberOfWorkers(Long numberOfWorkers) {
        this.numberOfWorkers = numberOfWorkers;
        return this;
    }
    @JsonProperty("Parameters")
    public TransformParameters parameters;
    public CreateMlTransformRequest withParameters(TransformParameters parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonProperty("Role")
    public String role;
    public CreateMlTransformRequest withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateMlTransformRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timeout")
    public Long timeout;
    public CreateMlTransformRequest withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransformEncryption")
    public TransformEncryption transformEncryption;
    public CreateMlTransformRequest withTransformEncryption(TransformEncryption transformEncryption) {
        this.transformEncryption = transformEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkerType")
    public WorkerTypeEnum workerType;
    public CreateMlTransformRequest withWorkerType(WorkerTypeEnum workerType) {
        this.workerType = workerType;
        return this;
    }
}