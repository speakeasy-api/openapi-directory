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
 * MlModel
 * <p> Represents the output of a <code>GetMLModel</code> operation. </p> <p>The content consists of the detailed metadata and the current status of the <code>MLModel</code>.</p>
**/
public class MlModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Algorithm")
    public AlgorithmEnum algorithm;
    public MlModel withAlgorithm(AlgorithmEnum algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComputeTime")
    public Long computeTime;
    public MlModel withComputeTime(Long computeTime) {
        this.computeTime = computeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;
    public MlModel withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedByIamUser")
    public String createdByIamUser;
    public MlModel withCreatedByIamUser(String createdByIamUser) {
        this.createdByIamUser = createdByIamUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointInfo")
    public RealtimeEndpointInfo endpointInfo;
    public MlModel withEndpointInfo(RealtimeEndpointInfo endpointInfo) {
        this.endpointInfo = endpointInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FinishedAt")
    public OffsetDateTime finishedAt;
    public MlModel withFinishedAt(OffsetDateTime finishedAt) {
        this.finishedAt = finishedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputDataLocationS3")
    public String inputDataLocationS3;
    public MlModel withInputDataLocationS3(String inputDataLocationS3) {
        this.inputDataLocationS3 = inputDataLocationS3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public MlModel withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MLModelId")
    public String mlModelId;
    public MlModel withMlModelId(String mlModelId) {
        this.mlModelId = mlModelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MLModelType")
    public MlModelTypeEnum mlModelType;
    public MlModel withMlModelType(MlModelTypeEnum mlModelType) {
        this.mlModelType = mlModelType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public MlModel withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public MlModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScoreThreshold")
    public Float scoreThreshold;
    public MlModel withScoreThreshold(Float scoreThreshold) {
        this.scoreThreshold = scoreThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ScoreThresholdLastUpdatedAt")
    public OffsetDateTime scoreThresholdLastUpdatedAt;
    public MlModel withScoreThresholdLastUpdatedAt(OffsetDateTime scoreThresholdLastUpdatedAt) {
        this.scoreThresholdLastUpdatedAt = scoreThresholdLastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SizeInBytes")
    public Long sizeInBytes;
    public MlModel withSizeInBytes(Long sizeInBytes) {
        this.sizeInBytes = sizeInBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartedAt")
    public OffsetDateTime startedAt;
    public MlModel withStartedAt(OffsetDateTime startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public EntityStatusEnum status;
    public MlModel withStatus(EntityStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrainingDataSourceId")
    public String trainingDataSourceId;
    public MlModel withTrainingDataSourceId(String trainingDataSourceId) {
        this.trainingDataSourceId = trainingDataSourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrainingParameters")
    public java.util.Map<String, String> trainingParameters;
    public MlModel withTrainingParameters(java.util.Map<String, String> trainingParameters) {
        this.trainingParameters = trainingParameters;
        return this;
    }
}