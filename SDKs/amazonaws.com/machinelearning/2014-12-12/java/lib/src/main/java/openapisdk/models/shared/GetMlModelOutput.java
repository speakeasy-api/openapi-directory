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
 * GetMlModelOutput
 * Represents the output of a <code>GetMLModel</code> operation, and provides detailed information about a <code>MLModel</code>.
**/
public class GetMlModelOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComputeTime")
    public Long computeTime;
    public GetMlModelOutput withComputeTime(Long computeTime) {
        this.computeTime = computeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;
    public GetMlModelOutput withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedByIamUser")
    public String createdByIamUser;
    public GetMlModelOutput withCreatedByIamUser(String createdByIamUser) {
        this.createdByIamUser = createdByIamUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointInfo")
    public RealtimeEndpointInfo endpointInfo;
    public GetMlModelOutput withEndpointInfo(RealtimeEndpointInfo endpointInfo) {
        this.endpointInfo = endpointInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FinishedAt")
    public OffsetDateTime finishedAt;
    public GetMlModelOutput withFinishedAt(OffsetDateTime finishedAt) {
        this.finishedAt = finishedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputDataLocationS3")
    public String inputDataLocationS3;
    public GetMlModelOutput withInputDataLocationS3(String inputDataLocationS3) {
        this.inputDataLocationS3 = inputDataLocationS3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public GetMlModelOutput withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogUri")
    public String logUri;
    public GetMlModelOutput withLogUri(String logUri) {
        this.logUri = logUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MLModelId")
    public String mlModelId;
    public GetMlModelOutput withMlModelId(String mlModelId) {
        this.mlModelId = mlModelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MLModelType")
    public MlModelTypeEnum mlModelType;
    public GetMlModelOutput withMlModelType(MlModelTypeEnum mlModelType) {
        this.mlModelType = mlModelType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public GetMlModelOutput withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public GetMlModelOutput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Recipe")
    public String recipe;
    public GetMlModelOutput withRecipe(String recipe) {
        this.recipe = recipe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schema")
    public String schema;
    public GetMlModelOutput withSchema(String schema) {
        this.schema = schema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScoreThreshold")
    public Float scoreThreshold;
    public GetMlModelOutput withScoreThreshold(Float scoreThreshold) {
        this.scoreThreshold = scoreThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ScoreThresholdLastUpdatedAt")
    public OffsetDateTime scoreThresholdLastUpdatedAt;
    public GetMlModelOutput withScoreThresholdLastUpdatedAt(OffsetDateTime scoreThresholdLastUpdatedAt) {
        this.scoreThresholdLastUpdatedAt = scoreThresholdLastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SizeInBytes")
    public Long sizeInBytes;
    public GetMlModelOutput withSizeInBytes(Long sizeInBytes) {
        this.sizeInBytes = sizeInBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartedAt")
    public OffsetDateTime startedAt;
    public GetMlModelOutput withStartedAt(OffsetDateTime startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public EntityStatusEnum status;
    public GetMlModelOutput withStatus(EntityStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrainingDataSourceId")
    public String trainingDataSourceId;
    public GetMlModelOutput withTrainingDataSourceId(String trainingDataSourceId) {
        this.trainingDataSourceId = trainingDataSourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrainingParameters")
    public java.util.Map<String, String> trainingParameters;
    public GetMlModelOutput withTrainingParameters(java.util.Map<String, String> trainingParameters) {
        this.trainingParameters = trainingParameters;
        return this;
    }
}