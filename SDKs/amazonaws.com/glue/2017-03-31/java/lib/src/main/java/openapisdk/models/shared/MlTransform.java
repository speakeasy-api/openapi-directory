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
 * MlTransform
 * A structure for a machine learning transform.
**/
public class MlTransform {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedOn")
    public OffsetDateTime createdOn;
    public MlTransform withCreatedOn(OffsetDateTime createdOn) {
        this.createdOn = createdOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public MlTransform withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EvaluationMetrics")
    public EvaluationMetrics evaluationMetrics;
    public MlTransform withEvaluationMetrics(EvaluationMetrics evaluationMetrics) {
        this.evaluationMetrics = evaluationMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GlueVersion")
    public String glueVersion;
    public MlTransform withGlueVersion(String glueVersion) {
        this.glueVersion = glueVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputRecordTables")
    public GlueTable[] inputRecordTables;
    public MlTransform withInputRecordTables(GlueTable[] inputRecordTables) {
        this.inputRecordTables = inputRecordTables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LabelCount")
    public Long labelCount;
    public MlTransform withLabelCount(Long labelCount) {
        this.labelCount = labelCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedOn")
    public OffsetDateTime lastModifiedOn;
    public MlTransform withLastModifiedOn(OffsetDateTime lastModifiedOn) {
        this.lastModifiedOn = lastModifiedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxCapacity")
    public Double maxCapacity;
    public MlTransform withMaxCapacity(Double maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxRetries")
    public Long maxRetries;
    public MlTransform withMaxRetries(Long maxRetries) {
        this.maxRetries = maxRetries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public MlTransform withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfWorkers")
    public Long numberOfWorkers;
    public MlTransform withNumberOfWorkers(Long numberOfWorkers) {
        this.numberOfWorkers = numberOfWorkers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public TransformParameters parameters;
    public MlTransform withParameters(TransformParameters parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Role")
    public String role;
    public MlTransform withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schema")
    public SchemaColumn[] schema;
    public MlTransform withSchema(SchemaColumn[] schema) {
        this.schema = schema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public TransformStatusTypeEnum status;
    public MlTransform withStatus(TransformStatusTypeEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timeout")
    public Long timeout;
    public MlTransform withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransformEncryption")
    public TransformEncryption transformEncryption;
    public MlTransform withTransformEncryption(TransformEncryption transformEncryption) {
        this.transformEncryption = transformEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransformId")
    public String transformId;
    public MlTransform withTransformId(String transformId) {
        this.transformId = transformId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkerType")
    public WorkerTypeEnum workerType;
    public MlTransform withWorkerType(WorkerTypeEnum workerType) {
        this.workerType = workerType;
        return this;
    }
}