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
 * ProjectVersionDescription
 * The description of a version of a model.
**/
public class ProjectVersionDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BillableTrainingTimeInSeconds")
    public Long billableTrainingTimeInSeconds;
    public ProjectVersionDescription withBillableTrainingTimeInSeconds(Long billableTrainingTimeInSeconds) {
        this.billableTrainingTimeInSeconds = billableTrainingTimeInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTimestamp")
    public OffsetDateTime creationTimestamp;
    public ProjectVersionDescription withCreationTimestamp(OffsetDateTime creationTimestamp) {
        this.creationTimestamp = creationTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EvaluationResult")
    public EvaluationResult evaluationResult;
    public ProjectVersionDescription withEvaluationResult(EvaluationResult evaluationResult) {
        this.evaluationResult = evaluationResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public ProjectVersionDescription withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ManifestSummary")
    public GroundTruthManifest manifestSummary;
    public ProjectVersionDescription withManifestSummary(GroundTruthManifest manifestSummary) {
        this.manifestSummary = manifestSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinInferenceUnits")
    public Long minInferenceUnits;
    public ProjectVersionDescription withMinInferenceUnits(Long minInferenceUnits) {
        this.minInferenceUnits = minInferenceUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputConfig")
    public OutputConfig outputConfig;
    public ProjectVersionDescription withOutputConfig(OutputConfig outputConfig) {
        this.outputConfig = outputConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProjectVersionArn")
    public String projectVersionArn;
    public ProjectVersionDescription withProjectVersionArn(String projectVersionArn) {
        this.projectVersionArn = projectVersionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ProjectVersionStatusEnum status;
    public ProjectVersionDescription withStatus(ProjectVersionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusMessage")
    public String statusMessage;
    public ProjectVersionDescription withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TestingDataResult")
    public TestingDataResult testingDataResult;
    public ProjectVersionDescription withTestingDataResult(TestingDataResult testingDataResult) {
        this.testingDataResult = testingDataResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrainingDataResult")
    public TrainingDataResult trainingDataResult;
    public ProjectVersionDescription withTrainingDataResult(TrainingDataResult trainingDataResult) {
        this.trainingDataResult = trainingDataResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("TrainingEndTimestamp")
    public OffsetDateTime trainingEndTimestamp;
    public ProjectVersionDescription withTrainingEndTimestamp(OffsetDateTime trainingEndTimestamp) {
        this.trainingEndTimestamp = trainingEndTimestamp;
        return this;
    }
}