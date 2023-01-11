package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMlTransformRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateMlTransformRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GlueVersion")
    public String glueVersion;
    public UpdateMlTransformRequest withGlueVersion(String glueVersion) {
        this.glueVersion = glueVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxCapacity")
    public Double maxCapacity;
    public UpdateMlTransformRequest withMaxCapacity(Double maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxRetries")
    public Long maxRetries;
    public UpdateMlTransformRequest withMaxRetries(Long maxRetries) {
        this.maxRetries = maxRetries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateMlTransformRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfWorkers")
    public Long numberOfWorkers;
    public UpdateMlTransformRequest withNumberOfWorkers(Long numberOfWorkers) {
        this.numberOfWorkers = numberOfWorkers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public TransformParameters parameters;
    public UpdateMlTransformRequest withParameters(TransformParameters parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Role")
    public String role;
    public UpdateMlTransformRequest withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timeout")
    public Long timeout;
    public UpdateMlTransformRequest withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonProperty("TransformId")
    public String transformId;
    public UpdateMlTransformRequest withTransformId(String transformId) {
        this.transformId = transformId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkerType")
    public WorkerTypeEnum workerType;
    public UpdateMlTransformRequest withWorkerType(WorkerTypeEnum workerType) {
        this.workerType = workerType;
        return this;
    }
}