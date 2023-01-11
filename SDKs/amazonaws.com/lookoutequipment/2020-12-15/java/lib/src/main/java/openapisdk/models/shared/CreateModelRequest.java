package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateModelRequest {
    @JsonProperty("ClientToken")
    public String clientToken;
    public CreateModelRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataPreProcessingConfiguration")
    public DataPreProcessingConfiguration dataPreProcessingConfiguration;
    public CreateModelRequest withDataPreProcessingConfiguration(DataPreProcessingConfiguration dataPreProcessingConfiguration) {
        this.dataPreProcessingConfiguration = dataPreProcessingConfiguration;
        return this;
    }
    @JsonProperty("DatasetName")
    public String datasetName;
    public CreateModelRequest withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetSchema")
    public DatasetSchema datasetSchema;
    public CreateModelRequest withDatasetSchema(DatasetSchema datasetSchema) {
        this.datasetSchema = datasetSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EvaluationDataEndTime")
    public OffsetDateTime evaluationDataEndTime;
    public CreateModelRequest withEvaluationDataEndTime(OffsetDateTime evaluationDataEndTime) {
        this.evaluationDataEndTime = evaluationDataEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EvaluationDataStartTime")
    public OffsetDateTime evaluationDataStartTime;
    public CreateModelRequest withEvaluationDataStartTime(OffsetDateTime evaluationDataStartTime) {
        this.evaluationDataStartTime = evaluationDataStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LabelsInputConfiguration")
    public LabelsInputConfiguration labelsInputConfiguration;
    public CreateModelRequest withLabelsInputConfiguration(LabelsInputConfiguration labelsInputConfiguration) {
        this.labelsInputConfiguration = labelsInputConfiguration;
        return this;
    }
    @JsonProperty("ModelName")
    public String modelName;
    public CreateModelRequest withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OffCondition")
    public String offCondition;
    public CreateModelRequest withOffCondition(String offCondition) {
        this.offCondition = offCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleArn")
    public String roleArn;
    public CreateModelRequest withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerSideKmsKeyId")
    public String serverSideKmsKeyId;
    public CreateModelRequest withServerSideKmsKeyId(String serverSideKmsKeyId) {
        this.serverSideKmsKeyId = serverSideKmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateModelRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("TrainingDataEndTime")
    public OffsetDateTime trainingDataEndTime;
    public CreateModelRequest withTrainingDataEndTime(OffsetDateTime trainingDataEndTime) {
        this.trainingDataEndTime = trainingDataEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("TrainingDataStartTime")
    public OffsetDateTime trainingDataStartTime;
    public CreateModelRequest withTrainingDataStartTime(OffsetDateTime trainingDataStartTime) {
        this.trainingDataStartTime = trainingDataStartTime;
        return this;
    }
}